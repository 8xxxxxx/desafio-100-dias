-- 01

SELECT pnome, dnr
FROM funcionario
WHERE cpf_supervisor IS NULL;

-- 02

SELECT pnome, dnr
FROM funcionario
WHERE cpf_supervisor IS NOT NULL;

-- 03

SELECT *
FROM funcionario
WHERE unome NOT IN ("Souza");