Search.setIndex({"docnames": ["auditoria", "codigo", "criacao", "index", "modelagem"], "filenames": ["auditoria.rst", "codigo.rst", "criacao.rst", "index.rst", "modelagem.rst"], "titles": ["Solu\u00e7\u00f5es de Auditoria", "C\u00f3digo Completo", "Cria\u00e7\u00e3o e Configura\u00e7\u00e3o do Banco de Dados", "Introdu\u00e7\u00e3o", "Modelagem do Banco de Dados"], "terms": {"\u00edndic": [], "m\u00f3dul": [], "p\u00e1gin": [], "busc": [], "banc": [0, 1, 3], "dad": [0, 1, 3], "cri": [0, 2, 3], "par": [0, 2, 3], "agend": 3, "As": 4, "entidad": 4, "envolv": 4, "projet": 4, "est\u00e3": [0, 4], "descrit": 4, "der": [2, 4], "abaix": [2, 4], "A": [0, 1, 4], "tabel": [1, 4], "tb_sal": [0, 1, 2], "mant\u00e9m": 4, "cadastr": 4, "possu": 4, "idenfic": 4, "id_sal": [0, 1, 2, 4], "bloc": [0, 1, 2, 4], "capac": 4, "m\u00e1xim": 4, "capacidade_max": [0, 1, 2, 4], "projetor": 4, "tem_projetor": [0, 1, 2, 4], "tb_professor": [0, 1, 2], "id_professor": [0, 1, 2, 4], "nom": [0, 1, 2, 4], "institut": 4, "faculdad": 4, "instituto_faculdad": [0, 1, 2, 4], "tb_disciplin": [0, 1, 2], "id_disciplin": [0, 1, 2, 4], "lecion": 4, "carg": 4, "hor\u00e1r": 4, "ch": [0, 1, 2, 4], "tb_agend": [0, 1, 2], "id_agend": [0, 1, 2, 4], "hor\u00e1ri": 4, "estar": 4, "horari": [0, 1, 2, 4], "integ": [0, 1, 2, 4], "varch": [0, 1, 2, 4], "2": [0, 1, 2, 4], "boolean": [0, 1, 2, 4], "50": [0, 1, 2, 4], "timestamp": [0, 1, 2, 4], "ap\u00f3s": 2, "idealiz": 2, "model": 2, "noss": [0, 2], "cheg": 2, "hor": 2, "lo": 2, "junt": 2, "denomin": 2, "gs": [1, 2], "gest\u00e3": 2, "sal": [], "bast": 2, "execut": [0, 1, 2], "comando": 2, "consol": 2, "sql": 2, "creat": [0, 1, 2], "databas": [1, 2], "agor": 2, "dentr": 2, "nov": 2, "matriz": [0, 1, 2], "vam": [0, 2], "caracter\u00edst": 2, "discut": 2, "anterior": 2, "tabl": [0, 1, 2], "constraint": [0, 1, 2], "nn_bloc": [0, 1, 2], "not": [0, 1, 2], "null": [0, 1, 2], "nn_capacidade_max": [0, 1, 2], "nn_tem_projetor": [0, 1, 2], "pk_id_sal": [1, 2], "primary": [1, 2], "key": [1, 2], "nn_nom": [0, 1, 2], "nn_inst_facul": [0, 1, 2], "pk_id_professor": [1, 2], "nn_id_professor": [0, 1, 2], "nn_ch": [0, 1, 2], "pk_id_disciplin": [1, 2], "fk_dis_id_professor": [1, 2], "foreign": [1, 2], "referenc": [1, 2], "nn_id_sal": [0, 1, 2], "nn_id_disciplin": [0, 1, 2], "nn_horari": [0, 1, 2], "pk_id_agend": [1, 2], "fk_dis_id_sal": [1, 2], "fk_dis_id_disciplin": [1, 2], "cria\u00e7\u00e3": [0, 1, 3], "configur": 3, "modelag": 3, "trabalh": [1, 3], "final": [1, 3], "disciplin": 3, "professor": [], "marci": 3, "cunh": 3, "docent": 3, "discent": 3, "matheus": [1, 3], "bucat": [1, 3], "n\u00ba": [], "matr\u00edcul": 3, "11921ecp002": [1, 3], "widths": [], "400": [], "head": [], "rows": [], "0": [], "200": [], "tt": [], "oi": [], "daoskko": [], "finaliz": 0, "algum": 0, "utiliz": 0, "met\u00f3d": 0, "stored": [], "procedur": 1, "triggers": 1, "tempor\u00e1r": 1, "solu\u00e7\u00f5": 3, "auditor": 3, "primeir": 0, "precis": 0, "ir\u00e3": 0, "receb": 0, "depo": 0, "ser\u00e3": 0, "alvos": 0, "tb_sala_auditor": [0, 1], "operaca": [0, 1], "char": [0, 1], "usuari": [0, 1], "dt_hr": [0, 1], "tb_professor_auditor": [0, 1], "tb_disciplina_auditor": [0, 1], "tb_agendamento_auditor": [0, 1], "enfim": 0, "armazen": 0, "alter": 0, "insert": [0, 1], "updat": [0, 1], "delet": [0, 1], "feit": [0, 4], "or": [0, 1], "replac": [0, 1], "function": [0, 1], "fn_sala_auditor": [0, 1], "returns": [0, 1], "trigg": [0, 1], "AS": [0, 1], "begin": [0, 1], "if": [0, 1], "tg_op": [0, 1], "then": [0, 1], "into": [0, 1], "select": [0, 1], "E": [0, 1], "user": [0, 1], "now": [0, 1], "old": [0, 1], "return": [0, 1], "elsif": [0, 1], "new": [0, 1], "i": [0, 1], "end": [0, 1], "languag": [0, 1], "plpgsql": [0, 1], "tg_sala_auditor": [0, 1], "after": [0, 1], "on": [0, 1], "each": [0, 1], "row": [0, 1], "fn_professor_auditor": [0, 1], "tg_professor_auditor": [0, 1], "fn_disciplina_auditor": [0, 1], "tb_discplina_auditor": [0, 1], "tg_disciplina_auditor": [0, 1], "fn_agendamento_auditor": [0, 1], "tg_agendamento_auditor": [0, 1], "ger": 2, "pel": 2, "dbeav": 2, "Os": 0, "c\u00f3dig": [0, 3], "fun\u00e7\u00f5": 0, "n\u00e3": 0, "carreg": 0, "syntax": 0, "highlight": 0, "apen": 0, "cria\u00e7\u00f5": 0, "si": 0, "color": 0, "acord": 0, "DE": 1, "pelegrin": 1, "schem": 1, "download": [], "this": [], "script": [], "trabfinal_matheusbucater_11921ecp002": [], "see": [], "complet": 3, "width": [], "800": [], "edr": 4, "sit": 4, "dbdiagr": 4, "io": 4, "_": [], "_dbdiagr": []}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"welcom": [], "to": [], "gest\u00e3": 3, "sal": [0, 2, 3, 4], "s": [], "documentation": [], "indic": [], "and": [], "tabl": [], "introdu": 3, "banc": [2, 4], "dad": [2, 4], "professor": [0, 2, 4], "disciplin": [0, 2, 4], "agend": [0, 2, 4], "tb_sal": 4, "tb_professor": 4, "tb_disciplin": 4, "tb_agend": 4, "cria\u00e7\u00e3": 2, "configur": 2, "schem": 2, "tabel": [0, 2], "modelag": 4, "inform": [], "conte\u00fad": 3, "solu\u00e7\u00f5": 0, "auditor": 0, "tempor\u00e1r": 0, "triggers": 0, "stored": 0, "procedur": 0, "c\u00f3dig": 1, "complet": 1}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"C\u00f3digo Completo": [[1, "codigo-completo"]], "Salas": [[2, "salas"], [4, "salas"], [0, "salas"], [0, "id1"]], "Professores": [[2, "professores"], [4, "professores"], [0, "professores"], [0, "id2"]], "Disciplinas": [[2, "disciplinas"], [4, "disciplinas"], [0, "disciplinas"], [0, "id3"]], "Agendamentos": [[2, "agendamentos"], [4, "agendamentos"], [0, "agendamentos"], [0, "id4"]], "Cria\u00e7\u00e3o e Configura\u00e7\u00e3o do Banco de Dados": [[2, "criacao-e-configuracao-do-banco-de-dados"]], "Cria\u00e7\u00e3o do Banco de Dados e Schema": [[2, "criacao-do-banco-de-dados-e-schema"]], "Cria\u00e7\u00e3o das Tabelas": [[2, "criacao-das-tabelas"]], "Modelagem do Banco de Dados": [[4, "modelagem-do-banco-de-dados"]], "tb_sala": [[4, "id1"]], "tb_professor": [[4, "id2"]], "tb_disciplina": [[4, "id3"]], "tb_agendamento": [[4, "id4"]], "Solu\u00e7\u00f5es de Auditoria": [[0, "solucoes-de-auditoria"]], "Tabelas Tempor\u00e1rias": [[0, "tabelas-temporarias"]], "Triggers e Stored Procedures": [[0, "triggers-e-stored-procedures"]], "Introdu\u00e7\u00e3o": [[3, "introducao"]], "Gest\u00e3o de Salas": [[3, "gestao-de-salas"]], "Conte\u00fados": [[3, "conteudos"]]}, "indexentries": {}})