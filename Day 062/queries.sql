-- 01

SELECT *
FROM funcionario
WHERE dnr = 5;

-- 02

SELECT pnome, unome, salario / 12 + 50 AS salario_mensal_bonus
FROM funcionario;