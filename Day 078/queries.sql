-- 01

SELECT SUM(salario), MAX(salario), MIN(salario), AVG(salario)
FROM funcionario;

-- 02

SELECT SUM(salario), MAX(salario), MIN(salario), AVG(salario)
FROM funcionario, departamento
WHERE dnumero = dnr AND dnome = "Pesquisa";
