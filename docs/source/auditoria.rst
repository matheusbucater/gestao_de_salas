Soluções de Auditoria
#####################

Para finalizar nosso Banco de Dados, vamos criar algumas soluções de
auditoria utilizando metódos de ``Stored Procedures``, ``Triggers`` e
``Tabelas Temporárias``.

Tabelas Temporárias
*******************

Primeiramente precisamos criar as tabelas temporárias que irão receber
os dados que depois serão alvos de auditoria.

Salas
=====

.. code-block:: sql
   :linenos:

   create table tb_sala_auditoria (
      operacao char not null,
      usuario varchar not null,
      dt_hr timestamp not null,
      id_sala integer,
      bloco varchar(2) constraint nn_bloco not null,
      capacidade_max integer constraint nn_capacidade_max not null,
      tem_projetor boolean constraint nn_tem_projetor not null
   );

Professores
===========

.. code-block:: sql
   :linenos:

   create table tb_professor_auditoria (
      operacao char not null,
      usuario varchar not null,
      dt_hr timestamp not null,
      id_professor integer,
      nome varchar(50) constraint nn_nome not null,
      instituto_faculdade varchar(50) constraint nn_inst_facul not null
   );

Disciplinas
===========

.. code-block:: sql
   :linenos:

   create table tb_disciplina_auditoria (
      operacao char not null,
      usuario varchar not null,
      dt_hr timestamp not null,
      id_disciplina integer,
      id_professor integer constraint nn_id_professor not null,
      nome varchar(50) constraint nn_nome not null,
      ch integer constraint nn_ch not null
   );

Agendamentos
============

.. code-block:: sql
   :linenos:

   create table tb_agendamento_auditoria (
      operacao char not null,
      usuario varchar not null,
      dt_hr timestamp not null,
      id_agendamento integer,
      id_sala integer constraint nn_id_sala not null,
      id_disciplina integer constraint nn_id_disciplina not null,
      horario timestamp constraint nn_horario not null
   );

Triggers e Stored Procedures
****************************

Enfim criaremos triggers para armazenar as alterações (``insert``, 
``update`` e ``delete``) feitas nas tabelas.

.. warning::

   Os códigos de criação das funções de auditoria não estão carregando
   o syntax highlight. Apenas as criações das triggers em si estão
   coloridos de acordo.

Salas
=====

.. code-block:: sql
   :linenos:

   CREATE OR REPLACE FUNCTION matriz.fn_sala_auditoria()
   RETURNS trigger AS
   $$
      BEGIN
         IF(tg_op = 'DELETE') THEN
            INSERT INTO tb_sala_auditoria
            SELECT 'E', user, now(),OLD.*;
            RETURN OLD;
         ELSIF(tg_op = 'UPDATE') THEN
           	INSERT INTO tb_sala_auditoria
            SELECT 'A', user, now(),OLD.*;
           	INSERT INTO tb_sala_auditoria
            SELECT 'A', user, now(),NEW.*;
            RETURN NEW;
         ELSIF(tg_op = 'INSERT') THEN
           	INSERT INTO tb_sala_auditoria
            SELECT 'I', user, now(),NEW.*;
            RETURN NEW;
         END IF;
         RETURN NULL;                   
      END
   $$
   LANGUAGE plpgsql;

.. code-block:: sql
   :linenos:

   create trigger tg_sala_auditoria
   after insert or update or delete on matriz.tb_sala 
   for each row execute procedure matriz.fn_sala_auditoria();

Professores
===========

.. code-block:: sql
   :linenos:

   CREATE OR REPLACE FUNCTION matriz.fn_professor_auditoria()
   RETURNS trigger AS
   $$
      BEGIN
         IF(tg_op = 'DELETE') THEN
            INSERT INTO tb_professor_auditoria
            SELECT 'E', user, now(),OLD.*;
            RETURN OLD;
         ELSIF(tg_op = 'UPDATE') THEN
           	INSERT INTO tb_professor_auditoria
            SELECT 'A', user, now(),OLD.*;
           	INSERT INTO tb_professor_auditoria
            SELECT 'A', user, now(),NEW.*;
            RETURN NEW;
    	 ELSIF(tg_op = 'INSERT') THEN
           	INSERT INTO tb_professor_auditoria
            SELECT 'I', user, now(),NEW.*;
            RETURN NEW;
         END IF;
         RETURN NULL;                   
      END
   $$
   LANGUAGE plpgsql;

.. code-block:: sql
   :linenos:

   create trigger tg_professor_auditoria
   after insert or update or delete on matriz.tb_professor 
   for each row execute procedure matriz.fn_professor_auditoria();

Disciplinas
===========

.. code-block:: sql
   :linenos:

   CREATE OR REPLACE FUNCTION matriz.fn_disciplina_auditoria()
   RETURNS trigger AS
   $$
      BEGIN
    	 IF(tg_op = 'DELETE') THEN
           	INSERT INTO tb_disciplina_auditoria
            SELECT 'E', user, now(),OLD.*;
            RETURN OLD;
    	 ELSIF(tg_op = 'UPDATE') THEN
           	INSERT INTO tb_disciplina_auditoria
            SELECT 'A', user, now(),OLD.*;
           	INSERT INTO tb_disciplina_auditoria
            SELECT 'A', user, now(),NEW.*;
            RETURN NEW;
    	 ELSIF(tg_op = 'INSERT') THEN
           	INSERT INTO tb_discplina_auditoria
            SELECT 'I', user, now(),NEW.*;
            RETURN NEW;
         END IF;
         RETURN NULL;                   
      END
   $$
   LANGUAGE plpgsql;

.. code-block:: sql
   :linenos:

   create trigger tg_disciplina_auditoria
   after insert or update or delete on matriz.tb_disciplina
   for each row execute procedure matriz.fn_disciplina_auditoria();

Agendamentos
============


.. code-block:: sql
   :linenos:

   CREATE OR REPLACE FUNCTION matriz.fn_agendamento_auditoria()
   RETURNS trigger AS
   $$
      BEGIN
    	 IF(tg_op = 'DELETE') THEN
           	INSERT INTO tb_agendamento_auditoria
            SELECT 'E', user, now(),OLD.*;
            RETURN OLD;
    	 ELSIF(tg_op = 'UPDATE') THEN
           	INSERT INTO tb_agendamento_auditoria
            SELECT 'A', user, now(),OLD.*;
           	INSERT INTO tb_agendamento_auditoria
            SELECT 'A', user, now(),NEW.*;
            RETURN NEW;
    	 ELSIF(tg_op = 'INSERT') THEN
           	INSERT INTO tb_agendamento_auditoria
            SELECT 'I', user, now(),NEW.*;
            RETURN NEW;
         END IF;
         RETURN NULL;                   
      END
   $$
   LANGUAGE plpgsql;

.. code-block:: sql
   :linenos:

   create trigger tg_agendamento_auditoria
   after insert or update or delete on matriz.tb_agendamento  
   for each row execute procedure matriz.fn_agendamento_auditoria();
