import math


def raizPerfeita(x):
    num = int(math.sqrt(x))
    return num*num == x


def isFibonacci(value):

    # Regra número Fibonacci raizQuadradaPerfeita( 5*N2 + 4 ) ou raizQuadradaPerfeita( 5*N2 – 4 )

    return raizPerfeita(5*value*value + 4) or raizPerfeita(5*value*value - 4)


valor = int(input("Informe um número: "))

if isFibonacci(valor):
    print("Este número pertence à sequência de Fibonacci!")
else:
    print("Este número não pertence à sequência de Fibonacci!")
