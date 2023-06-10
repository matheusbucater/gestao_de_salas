Criação e Configuração do Banco de Dados
########################################

Após idealizar e modelar nosso Banco de Dados, chegou a hora de criá-lo
junto com suas tabelas.

Criação do Banco de Dados e Schema
**********************************

Para criar o Banco de Dados denominado de GS (Gestão de Salas), basta
executar o comando abaixo em um console SQL.

.. code-block:: sql
   :linenos:
   
   create database gs;

Agora dentro de um console SQL no novo Banco de Dados ``gs`` criado,
para criar um schema denominado de matriz, basta executar o comando 
abaixo.

.. code-block:: sql
   :linenos:

   create schema matriz;

Criação das Tabelas
*******************

Agora, com o Banco de Dados ``gs`` e o schema ``matriz`` já criados,
vamos criar as tabelas do nosso Banco de Dados.

Salas
=====

Para criar a tabela ``tb_sala`` com as características já discutidas
anteriormente basta executar o comando.

.. code-block:: sql
   :linenos:

   create table matriz.tb_sala (
      id_sala integer,
      bloco varchar(2) constraint nn_bloco not null,
      capacidade_max integer constraint nn_capacidade_max not null,
      tem_projetor boolean constraint nn_tem_projetor not null,
      constraint pk_id_sala primary key (id_sala)
   );

Professores
===========

Para criar a tabela ``tb_professor`` com as características já discutidas
anteriormente basta executar o comando.

.. code-block:: sql
   :linenos:

   create table matriz.tb_professor (
      id_professor integer,
      nome varchar(50) constraint nn_nome not null,
      instituto_faculdade varchar(50) constraint nn_inst_facul not null,
      constraint pk_id_professor primary key (id_professor)
   );

Disciplinas
===========

Para criar a tabela ``tb_disciplina`` com as características já discutidas
anteriormente basta executar o comando.

.. code-block:: sql
   :linenos:

   create table matriz.tb_disciplina (
      id_disciplina integer,
      id_professor integer constraint nn_id_professor not null,
      nome varchar(50) constraint nn_nome not null,
      ch integer constraint nn_ch not null,
      constraint pk_id_disciplina primary key (id_disciplina),
      constraint fk_dis_id_professor foreign key (id_professor) references matriz.tb_professor (id_professor)
   );

Agendamentos
============

Para criar a tabela ``tb_agendamento`` com as características já
discutidas anteriormente basta executar o comando.

.. code-block:: sql
   :linenos:

   create table matriz.tb_agendamento (
      id_agendamento integer,
      id_sala integer constraint nn_id_sala not null,
      id_disciplina integer constraint nn_id_disciplina not null,
      horario timestamp constraint nn_horario not null,
      constraint pk_id_agendamento primary key (id_agendamento),
      constraint fk_dis_id_sala foreign key (id_sala) references matriz.tb_sala (id_sala),
      constraint fk_dis_id_disciplina foreign key (id_disciplina) references matriz.tb_disciplina (id_disciplina)
   );

.. note::
   
   DER gerado pelo DBeaver.

   .. image:: img/edr_dbeaver.png
      :width: 800
