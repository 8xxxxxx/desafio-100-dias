-- 01

SELECT *
FROM funcionario
WHERE (salario BETWEEN 30000 AND 40000) AND dnr = 5;

-- 02

SELECT pnome, unome, endereco
FROM funcionario
WHERE dnr IN (SELECT dnumero FROM departamento WHERE dnome="Pesquisa");