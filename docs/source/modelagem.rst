Modelagem do Banco de Dados
###########################

As entidades envolvidas no projeto estão descritas no DER abaixo.

Salas
*****

A tabela ``tb_sala`` mantém o cadastro das salas. Possuindo um
idenficador (``id_sala``), o bloco em que a sala está (``bloco``), a
capacidade máxima da sala (``capacidade_max``) e se a sala possui 
projetor (``tem_projetor``).

.. list-table:: tb_sala
   :widths: 50 50
   :header-rows: 0

   * - id_sala
     - integer
   * - bloco
     - varchar(2)
   * - capacidade_max
     - integer
   * - tem_projetor
     - boolean

Professores
***********

A tabela ``tb_professor`` mantém o cadastro dos professores. Possuindo um
idenficador (``id_professor``), o nome do professor (``nome``) e o
instituto ou faculdade do professor (``instituto_faculdade``).

.. list-table:: tb_professor
   :widths: 50 50
   :header-rows: 0

   * - id_professor
     - integer
   * - nome
     - varchar(50)
   * - instituto_faculdade
     - varchar(50)

Disciplinas
***********

A tabela ``tb_disciplina`` mantém o cadastro das disciplinas. Possuindo um
idenficador (``id_disciplina``), o idenficador do professor que leciona
essa disciplina (``id_professor``), o nome da disciplina (``nome``) e a
carga horária da disciplina (``ch``).

.. list-table:: tb_disciplina
   :widths: 50 50
   :header-rows: 0

   * - id_disciplina
     - integer
   * - id_professor
     - integer
   * - nome
     - varchar(50)
   * - ch
     - integer

Agendamentos
************

A tabela ``tb_agendamento`` mantém o cadastro dos agendamentos. Possuindo
um idenficador (``id_agendamento``), o idenficador da sala agendada
(``id_sala``), o idenficador da disciplina lecionada (``id_disciplina``) e o horário em que a sala estará agendada (``horario``).

.. list-table:: tb_agendamento
   :widths: 50 50
   :header-rows: 0

   * - id_agendamento
     - integer
   * - id_sala
     - integer
   * - id_disciplina
     - integer
   * - horario
     - timestamp
.. note::
   
   DER feito no site `dbdiagram.io <https://dbdiagram.io/>`_.

   .. image:: img/gs_der.png
      :width: 800


