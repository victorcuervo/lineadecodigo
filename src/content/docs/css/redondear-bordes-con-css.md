---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNFHROG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7ZwhKxEoj%2FFID4TdFig59k%2FNywD6yPi8CgRVaiClCAgIhAJHIQI7lzw6u5R5%2BAQvo2fNbmxmdfWqKfUpKegrwDV1ZKv8DCE8QABoMNjM3NDIzMTgzODA1IgznVB7H2J4N4z11BBIq3APoHwGlCh3j1847HLmGUG8leX1t7fLze%2FIOkPHG6CWZ%2F2GabjeK5PKdP19tCqL%2FcYPRO12Iv3eh6bCedeW45KtIrp9QNPd%2FKaHMnzONqTnBb3B%2FFX2oZxfMeyAYx58AnQoIrNRM5UFsXVZXU%2FXKsAayy0Akbpz9smBv%2BZqDFtZuYVcViR9VQMBrMKptV%2BL9qL2NyGGvikKloeJLoiZYW01JgfPjzic6rFHp4CTZdloOPdhK%2FJ90EwnV2ls8dXV0mS91IJUMGwIubTHlBBX5fUlu09foucgNf7eu7Oehwv%2B1kWBbomHcgDyUiWgy0ITlQxj1rCTTSMIVa9%2F6wm4U7ucmuvkz%2F5lI0Y65eKRbwrE0%2FhzRxuoX9r9oAJGy0iJEuN4Z15wrpvgdV4R%2Fg%2FkjRyElyP6kHcUlRy1JEzVuSow%2BP%2Fb9ceqg5JaKKSn4TM%2FSJdudFNgZzntIMQf72Obf8IUXa0Po4efrvUqgSXUHGpzydmt8gA8K3sBoCU44502JYN%2B3qHpW1N%2Bx026G4KOq10BXaPYKhGoIz7iCMtqBAPTy7UGeKymgM%2FBS6OEjsrIl0ANHfFKOnsvt7Qg3MIGuM9LoEbZ%2Fp%2BNX38XhmDlppkDXUHGTAthcL6%2F6jf77fzDUjMjJBjqkAarNYiSmJ%2F5tz4vhTsPPQV1Qrs9bJdQZnzObYtc15u71sPlgpCCfJIJayJb2r6QHuVcW5%2Br7vHRPmZ1iF5CJZdQHGl1mRQNY%2BWSrNBpkQ1OcGLis5jNArBBfl7Me7kIrPc8yY0f2oYslzdCKfQP1tr7nb3Vaw1Gusuyk9%2F5pF2FXVwwlWL%2BD8kpTC3hnHcTNqxGa7nlzTfUA%2F33NNKQ50QCZsfNZ&X-Amz-Signature=d6fe64bbd3c2bab0bbf80bf77aecdec0843552ee47b09e7a66de774449da59d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNFHROG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7ZwhKxEoj%2FFID4TdFig59k%2FNywD6yPi8CgRVaiClCAgIhAJHIQI7lzw6u5R5%2BAQvo2fNbmxmdfWqKfUpKegrwDV1ZKv8DCE8QABoMNjM3NDIzMTgzODA1IgznVB7H2J4N4z11BBIq3APoHwGlCh3j1847HLmGUG8leX1t7fLze%2FIOkPHG6CWZ%2F2GabjeK5PKdP19tCqL%2FcYPRO12Iv3eh6bCedeW45KtIrp9QNPd%2FKaHMnzONqTnBb3B%2FFX2oZxfMeyAYx58AnQoIrNRM5UFsXVZXU%2FXKsAayy0Akbpz9smBv%2BZqDFtZuYVcViR9VQMBrMKptV%2BL9qL2NyGGvikKloeJLoiZYW01JgfPjzic6rFHp4CTZdloOPdhK%2FJ90EwnV2ls8dXV0mS91IJUMGwIubTHlBBX5fUlu09foucgNf7eu7Oehwv%2B1kWBbomHcgDyUiWgy0ITlQxj1rCTTSMIVa9%2F6wm4U7ucmuvkz%2F5lI0Y65eKRbwrE0%2FhzRxuoX9r9oAJGy0iJEuN4Z15wrpvgdV4R%2Fg%2FkjRyElyP6kHcUlRy1JEzVuSow%2BP%2Fb9ceqg5JaKKSn4TM%2FSJdudFNgZzntIMQf72Obf8IUXa0Po4efrvUqgSXUHGpzydmt8gA8K3sBoCU44502JYN%2B3qHpW1N%2Bx026G4KOq10BXaPYKhGoIz7iCMtqBAPTy7UGeKymgM%2FBS6OEjsrIl0ANHfFKOnsvt7Qg3MIGuM9LoEbZ%2Fp%2BNX38XhmDlppkDXUHGTAthcL6%2F6jf77fzDUjMjJBjqkAarNYiSmJ%2F5tz4vhTsPPQV1Qrs9bJdQZnzObYtc15u71sPlgpCCfJIJayJb2r6QHuVcW5%2Br7vHRPmZ1iF5CJZdQHGl1mRQNY%2BWSrNBpkQ1OcGLis5jNArBBfl7Me7kIrPc8yY0f2oYslzdCKfQP1tr7nb3Vaw1Gusuyk9%2F5pF2FXVwwlWL%2BD8kpTC3hnHcTNqxGa7nlzTfUA%2F33NNKQ50QCZsfNZ&X-Amz-Signature=ab2adf0794233237db94699959eb034312d4a14dd4cf4f7c4bfef3ae00c4727e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
