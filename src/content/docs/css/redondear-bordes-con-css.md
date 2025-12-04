---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJPBWSZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGvE8Ipe9j8Sqi4%2Bk5zmGxQ%2B44pHFiCjExvjh%2F6AW1dGAiANx2%2FnL7TlB%2FRqzKFYazmNelZihd%2BbtKAw1r%2FoHodpvir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMfEETTkxXHvDU0dhdKtwDZURxQjQrZDYPGU0eEBioY2%2Fl1ahO6p8q%2BKVtPFuELkStZKZWNdgn4xMuAEBzvLRgIrvLvXc07CI3HMB%2BeyfP0OyLkejdDDV07woHF24Vx83eP6ex4ENY1g75WHVGoNmxXCJ9x3Lc2Oxy9cUy0LNvTWHa1Xdp%2F4K86J%2FSFkjcqpscvMK12FOMwzXxnh1BzOuCty%2Fni1tWj6chspApft8cDj7ClMdITlKaaflzuzZ%2FLks%2Fm9%2F5447ynct2kyLnXz50rvEFHxMn5ZDEvrmx%2FluDjNtx%2FPh5XtC0R%2BDIyDf%2BW1H2TuNE2a6WFiiqUVr4ZU8sh7u8NspIv7XwSZkb12CtVbSp0N55ZIKa6H4Wv9EgoBB1N%2Bd%2BgGFQeoQV%2Fks1h%2BiHPw7ONIDuPsZcgFr9GLHIdqVl6FOEuaQoxCglH7li3ifYOGFkiTfkkoAq6WJkTd%2BdyeRLbNq4%2Bt6P%2BSiI1gyg7PFG%2BY7dFiY%2FRPxtE8iIB9N8DbAQmfuGoy53JlOSZwpn6z%2FbRt3qU10JNjxzECvdiMPPdW4eEvN%2FDU95fYlENJyhmclvFq%2BDUpz6oAP4XyFTRRbe53hBGx%2FI2T4xtYtn6eS7QU06nbc59%2BDHkjBO0wtZY7p11CcEs%2F%2FbEMkw767EyQY6pgEkCxomc%2F5MrZF0fsjTNE6veShfL2uYZ8zyo0lUWhJpv7eo%2BchWrg5gAAiN1sbaz4Ci%2FUg65INgEnyKy%2BcOrlWXgLhVpKqXXigYxClBol5NGh5aXOT2dZMMpg66cCCvxZwSTBMS8%2FnSOXXdVYZv58vX5pfOXFU5jcVUTesHO%2BnpRQjxarKhbBtKv29b1mU0%2Fcpl332gmI0DC2BXDkG1VoaWB2HBlf7g&X-Amz-Signature=58e3744734e92deb4a0f43ec89fda0346c8b45c141853acc0cfc4e84a1e71c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJPBWSZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGvE8Ipe9j8Sqi4%2Bk5zmGxQ%2B44pHFiCjExvjh%2F6AW1dGAiANx2%2FnL7TlB%2FRqzKFYazmNelZihd%2BbtKAw1r%2FoHodpvir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMfEETTkxXHvDU0dhdKtwDZURxQjQrZDYPGU0eEBioY2%2Fl1ahO6p8q%2BKVtPFuELkStZKZWNdgn4xMuAEBzvLRgIrvLvXc07CI3HMB%2BeyfP0OyLkejdDDV07woHF24Vx83eP6ex4ENY1g75WHVGoNmxXCJ9x3Lc2Oxy9cUy0LNvTWHa1Xdp%2F4K86J%2FSFkjcqpscvMK12FOMwzXxnh1BzOuCty%2Fni1tWj6chspApft8cDj7ClMdITlKaaflzuzZ%2FLks%2Fm9%2F5447ynct2kyLnXz50rvEFHxMn5ZDEvrmx%2FluDjNtx%2FPh5XtC0R%2BDIyDf%2BW1H2TuNE2a6WFiiqUVr4ZU8sh7u8NspIv7XwSZkb12CtVbSp0N55ZIKa6H4Wv9EgoBB1N%2Bd%2BgGFQeoQV%2Fks1h%2BiHPw7ONIDuPsZcgFr9GLHIdqVl6FOEuaQoxCglH7li3ifYOGFkiTfkkoAq6WJkTd%2BdyeRLbNq4%2Bt6P%2BSiI1gyg7PFG%2BY7dFiY%2FRPxtE8iIB9N8DbAQmfuGoy53JlOSZwpn6z%2FbRt3qU10JNjxzECvdiMPPdW4eEvN%2FDU95fYlENJyhmclvFq%2BDUpz6oAP4XyFTRRbe53hBGx%2FI2T4xtYtn6eS7QU06nbc59%2BDHkjBO0wtZY7p11CcEs%2F%2FbEMkw767EyQY6pgEkCxomc%2F5MrZF0fsjTNE6veShfL2uYZ8zyo0lUWhJpv7eo%2BchWrg5gAAiN1sbaz4Ci%2FUg65INgEnyKy%2BcOrlWXgLhVpKqXXigYxClBol5NGh5aXOT2dZMMpg66cCCvxZwSTBMS8%2FnSOXXdVYZv58vX5pfOXFU5jcVUTesHO%2BnpRQjxarKhbBtKv29b1mU0%2Fcpl332gmI0DC2BXDkG1VoaWB2HBlf7g&X-Amz-Signature=ebac6098f39795982b24f4ae41539eb397aac838c3ba07a95d1fa9e20beeabfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
