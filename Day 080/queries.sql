-- 01

SELECT cpf_supervisor, count(*), AVG(salario)
FROM funcionario
GROUP BY cpf_supervisor
HAVING count(*) > 2;

-- 02

SELECT pnome, unome
FROM funcionario, dependente
WHERE cpf = fcpf
GROUP BY unome, pnome
HAVING count(*) >= 2;
