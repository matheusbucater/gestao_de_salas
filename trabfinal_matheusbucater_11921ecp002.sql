-- TRABALHO FINAL DE BANCO DE DADOS
-- MATHEUS PELEGRINI BUCATER
-- 11921ECP002

-- Criação do Banco de Dados
create database gs;

-- Criação do Schema
create schema matriz;

-- Criação das Tabelas
create table matriz.tb_professor (
	id_professor integer,
	nome varchar(50) constraint nn_nome not null,
	instituto_faculdade varchar(50) constraint nn_inst_facul not null,
	constraint pk_id_professor primary key (id_professor)
);

create table matriz.tb_sala (
	id_sala integer,
	bloco varchar(2) constraint nn_bloco not null,
	capacidade_max integer constraint nn_capacidade_max not null,
	tem_projetor boolean constraint nn_tem_projetor not null,
	constraint pk_id_sala primary key (id_sala)
);

create table matriz.tb_disciplina (
	id_disciplina integer,
	id_professor integer constraint nn_id_professor not null,
	nome varchar(50) constraint nn_nome not null,
	ch integer constraint nn_ch not null,
	constraint pk_id_disciplina primary key (id_disciplina),
	constraint fk_dis_id_professor foreign key (id_professor) references matriz.tb_professor (id_professor)
);

create table matriz.tb_agendamento (
	id_agendamento integer,
	id_sala integer constraint nn_id_sala not null,
	id_disciplina integer constraint nn_id_disciplina not null,
	horario timestamp constraint nn_horario not null,
	constraint pk_id_agendamento primary key (id_agendamento),
	constraint fk_dis_id_sala foreign key (id_sala) references matriz.tb_sala (id_sala),
	constraint fk_dis_id_disciplina foreign key (id_disciplina) references matriz.tb_disciplina (id_disciplina)
);

-- Criação das Tabelas Temporárias
create table tb_sala_auditoria (
	operacao char not null,
	usuario varchar not null,
	dt_hr timestamp not null,
	id_sala integer,
	bloco varchar(2) constraint nn_bloco not null,
	capacidade_max integer constraint nn_capacidade_max not null,
	tem_projetor boolean constraint nn_tem_projetor not null
);

create table tb_professor_auditoria (
	operacao char not null,
	usuario varchar not null,
	dt_hr timestamp not null,
	id_professor integer,
	nome varchar(50) constraint nn_nome not null,
	instituto_faculdade varchar(50) constraint nn_inst_facul not null
);

create table tb_disciplina_auditoria (
	operacao char not null,
	usuario varchar not null,
	dt_hr timestamp not null,
	id_disciplina integer,
	id_professor integer constraint nn_id_professor not null,
	nome varchar(50) constraint nn_nome not null,
	ch integer constraint nn_ch not null
);

create table tb_agendamento_auditoria (
	operacao char not null,
	usuario varchar not null,
	dt_hr timestamp not null,
	id_agendamento integer,
	id_sala integer constraint nn_id_sala not null,
	id_disciplina integer constraint nn_id_disciplina not null,
	horario timestamp constraint nn_horario not null
);

-- Criação das Triggers
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

create trigger tg_sala_auditoria
after insert or update or delete on matriz.tb_sala 
for each row execute procedure matriz.fn_sala_auditoria();

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

create trigger tg_professor_auditoria
after insert or update or delete on matriz.tb_professor 
for each row execute procedure matriz.fn_professor_auditoria();

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

create trigger tg_disciplina_auditoria
after insert or update or delete on matriz.tb_disciplina
for each row execute procedure matriz.fn_disciplina_auditoria();

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

create trigger tg_agendamento_auditoria
after insert or update or delete on matriz.tb_agendamento  
for each row execute procedure matriz.fn_agendamento_auditoria();
