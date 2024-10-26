-- 01

SELECT pnome, salario
FROM funcionario
WHERE salario >= 30000;

-- 02

SELECT datamasc, endereco
FROM funcionario
WHERE pnome = 'Joao' AND minicial = 'B' AND unome = 'Silva';