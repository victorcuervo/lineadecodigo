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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ZTTDAM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD4GpS6M0kvwylzDgXc7G20IM4yklVeizXn4Q4gGnNyNgIgc92Eu%2FAGSW4823mBGDqIh%2ByjuMs9PCVj5%2BAJ1sTxUYgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDHPQdd1CfYTh5xcKvCrcA0EDWiN5HpMJgV8ESSivjCvHchfMoqQ%2BIvf0NFWom4Qz61qu6o%2BuQqaP5qASnBUa3JHsC6Q4eahmVnET6L8f86y0%2F4XXtg4mG9ot0a5KQUBBzJeZYAR%2BCAySkgfX0306yJnVwt7JuNcwWOVABr6%2Biu4QyBTwefxojnFhVT%2FAA8opMaobiqsoxdmjEZEnsJvsoTPUz%2F%2F9l5ztfbqTqGy4k6vy8CHn%2BtZVdJYclGAvL%2F9%2B61P0dYE%2Fx7%2B33jcSpy6v0USq4mthKgDZILfGWxdTpoCsHWlPqfVy4K9gZAmLaPc2mQJn8R%2F3AnXK10yL4lyhvH3Uzx8hcCVdUcJPt%2B0oqTnCyCemSBeoUwDQ1Tbo81QS270%2FOAeQsWud5Ovm0buGTWgQM7b7QzatI3lm1ew2XTeNhuHp6OWFv9sO2EI1%2BinACJnbuPhCymPjKYkIZzGPqPgUiAlx%2Bct2JxR3fdIRFvggZ78jb1Jf4mKIEg9V9CvV3YtnQfkZxpi4DpZ9VN4WwOR9b8GnbxgGjG5xJwGVFGmNqqmgVaaL4KGLHDRDLiepms%2Bx%2BZDYF6AcvuLmsiBKqN9p6NdHfoVTYW%2FNakbBQHiu83VFaA7IGZMRQIEnSBIW8HDj4T%2FEafW1C1J4MOTzw8kGOqUBS%2F6infKhVJwHR0qZXYHtuWJA8kF3PqCy85nMS12K8e2qQ1lEq%2Bb46mxaAqAOFWVxCiqNk2gOIbL4AZdgOb3nBtCA%2FGu5bDYWwxNXt6xrfMKo2uDXiQxc6KBxAXmw%2FDJmTheXbom1mtSSCLj6ySyQtQncL1PY4YKb9JhUt70U7ssPxCETpXHRQRK2PwXHB%2FmhudVgwcJccwNmeZt9rxsaf%2FiyzP6Z&X-Amz-Signature=2ac4e16d4697a9f8f96e55c36bc1a2fe36658decd50efa1a09f623de208d36fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ZTTDAM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD4GpS6M0kvwylzDgXc7G20IM4yklVeizXn4Q4gGnNyNgIgc92Eu%2FAGSW4823mBGDqIh%2ByjuMs9PCVj5%2BAJ1sTxUYgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDHPQdd1CfYTh5xcKvCrcA0EDWiN5HpMJgV8ESSivjCvHchfMoqQ%2BIvf0NFWom4Qz61qu6o%2BuQqaP5qASnBUa3JHsC6Q4eahmVnET6L8f86y0%2F4XXtg4mG9ot0a5KQUBBzJeZYAR%2BCAySkgfX0306yJnVwt7JuNcwWOVABr6%2Biu4QyBTwefxojnFhVT%2FAA8opMaobiqsoxdmjEZEnsJvsoTPUz%2F%2F9l5ztfbqTqGy4k6vy8CHn%2BtZVdJYclGAvL%2F9%2B61P0dYE%2Fx7%2B33jcSpy6v0USq4mthKgDZILfGWxdTpoCsHWlPqfVy4K9gZAmLaPc2mQJn8R%2F3AnXK10yL4lyhvH3Uzx8hcCVdUcJPt%2B0oqTnCyCemSBeoUwDQ1Tbo81QS270%2FOAeQsWud5Ovm0buGTWgQM7b7QzatI3lm1ew2XTeNhuHp6OWFv9sO2EI1%2BinACJnbuPhCymPjKYkIZzGPqPgUiAlx%2Bct2JxR3fdIRFvggZ78jb1Jf4mKIEg9V9CvV3YtnQfkZxpi4DpZ9VN4WwOR9b8GnbxgGjG5xJwGVFGmNqqmgVaaL4KGLHDRDLiepms%2Bx%2BZDYF6AcvuLmsiBKqN9p6NdHfoVTYW%2FNakbBQHiu83VFaA7IGZMRQIEnSBIW8HDj4T%2FEafW1C1J4MOTzw8kGOqUBS%2F6infKhVJwHR0qZXYHtuWJA8kF3PqCy85nMS12K8e2qQ1lEq%2Bb46mxaAqAOFWVxCiqNk2gOIbL4AZdgOb3nBtCA%2FGu5bDYWwxNXt6xrfMKo2uDXiQxc6KBxAXmw%2FDJmTheXbom1mtSSCLj6ySyQtQncL1PY4YKb9JhUt70U7ssPxCETpXHRQRK2PwXHB%2FmhudVgwcJccwNmeZt9rxsaf%2FiyzP6Z&X-Amz-Signature=01f78e4c61b25039c865b45d9d94f0b1328b9158432b11036bd3dd065c235a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
