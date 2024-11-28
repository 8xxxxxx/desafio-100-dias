-- 01

SELECT *
FROM funcionario
WHERE salario NOT BETWEEN 30000 AND 50000;

-- 02

SELECT pnome, salario
FROM funcionario
WHERE salario >= 30000
ORDER BY unome;

-- 03

SELECT pnome, unome, endereco
FROM funcionario, departamento
WHERE dnome = "Pesquisa" and dnumero = dnr
ORDER BY pnome DESC;