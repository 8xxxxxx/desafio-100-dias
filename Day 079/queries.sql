-- 01

SELECT dnr, count(*), AVG(salario)
FROM funcionario
GROUP BY dnr;

-- 02

SELECT cpf_supervisor, count(*), AVG(salario)
FROM funcionario
GROUP BY cpf_supervisor;
