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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PPFJTI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjA5GjwKEOVZa6XXD%2BF7kkI4FD1sSiLmw%2FE50EFoc0DwIhALa4UJeJ8QvZ9gJxJTnriAKfA0TJpfwXfNC1dSe3eovxKv8DCG4QABoMNjM3NDIzMTgzODA1Igwyx9iJw3oTZnabq6oq3AN%2Fa%2Bka1XC4e6DgVTYcsV%2FWhITx9Lq9YVF0N3ZTinANq3zj6KNbFoXFnARTVSCv586eVxX3IUaelE%2F2jlMD%2FEFJbdbSsqCP4PIrrJNlf48NOld%2FzUzu8uew2U18K5LKbktpoJW%2FVB4mz1ZDNl3j2hffDUR37F6eZYNMVt1kKNddjIjcogtbX3TExDVpyj64RS68kmkpdX5uquegn81JpQ7APc5sHUM6zieDcN51lV6slWhpA1lT3nitnc8PD5mV4qlzDHkhO1c9kXMM7yO1Rde7xu%2FYGQbhjHz0jTLPks%2FuY9g0be0U%2FnDIpvy9ebc9p5qnX0y2Dq%2FxuzyoqKSJAVliiZefQits6AV2DT8ToxYUDMqPAPIl6PgKCMb3obCO0Dpb%2FtH9gIQ1l2TsWuCGyPBavSOFunPSSVBtpLcirGdvw11cnvU5iaEuQXyLLGNESulZIufgQuGQWVABIlP2JpBt%2F8udE9wj%2FgpAUl9Pw0WpXmgX2TB5f3nrGlv%2FOSiblso7CCr8CioG0Fon10SaysjwUTJOLjD2n8OjoSP2zgPMQwj0tCZBCM2vj2tbUTtUzJkoafwSqYN1dI%2B1NZc4d6Vlc4uEPQZsBI7yMpI20oJuLnRF9qk8y8EdSwC47jCg%2Fc7JBjqkAckRduEuvD3WiM8nND5kZYAcxIRNO6YxIJe8o2Fdzo3lpll7O4nzkxakbSF3Wz3CFX6t3qtzFe4ke4uiieOz75X0jWGG%2Fw8TOLysP%2BIYv4zm%2FDY7YKQZRuR6aGEfnwY0BaSGFal%2B2RxI66ctX2BYMNwCy7l4EjzxRk3wZjKecCwo29v6dUPYJtQETbjAjP%2FAyVVV50OyvJKEOkmMvOCxsmVCCW7U&X-Amz-Signature=7f457e64fc272834f65c8fe5b91aaa1f7ac01bf009a0d6001627f4ab42f68f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PPFJTI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjA5GjwKEOVZa6XXD%2BF7kkI4FD1sSiLmw%2FE50EFoc0DwIhALa4UJeJ8QvZ9gJxJTnriAKfA0TJpfwXfNC1dSe3eovxKv8DCG4QABoMNjM3NDIzMTgzODA1Igwyx9iJw3oTZnabq6oq3AN%2Fa%2Bka1XC4e6DgVTYcsV%2FWhITx9Lq9YVF0N3ZTinANq3zj6KNbFoXFnARTVSCv586eVxX3IUaelE%2F2jlMD%2FEFJbdbSsqCP4PIrrJNlf48NOld%2FzUzu8uew2U18K5LKbktpoJW%2FVB4mz1ZDNl3j2hffDUR37F6eZYNMVt1kKNddjIjcogtbX3TExDVpyj64RS68kmkpdX5uquegn81JpQ7APc5sHUM6zieDcN51lV6slWhpA1lT3nitnc8PD5mV4qlzDHkhO1c9kXMM7yO1Rde7xu%2FYGQbhjHz0jTLPks%2FuY9g0be0U%2FnDIpvy9ebc9p5qnX0y2Dq%2FxuzyoqKSJAVliiZefQits6AV2DT8ToxYUDMqPAPIl6PgKCMb3obCO0Dpb%2FtH9gIQ1l2TsWuCGyPBavSOFunPSSVBtpLcirGdvw11cnvU5iaEuQXyLLGNESulZIufgQuGQWVABIlP2JpBt%2F8udE9wj%2FgpAUl9Pw0WpXmgX2TB5f3nrGlv%2FOSiblso7CCr8CioG0Fon10SaysjwUTJOLjD2n8OjoSP2zgPMQwj0tCZBCM2vj2tbUTtUzJkoafwSqYN1dI%2B1NZc4d6Vlc4uEPQZsBI7yMpI20oJuLnRF9qk8y8EdSwC47jCg%2Fc7JBjqkAckRduEuvD3WiM8nND5kZYAcxIRNO6YxIJe8o2Fdzo3lpll7O4nzkxakbSF3Wz3CFX6t3qtzFe4ke4uiieOz75X0jWGG%2Fw8TOLysP%2BIYv4zm%2FDY7YKQZRuR6aGEfnwY0BaSGFal%2B2RxI66ctX2BYMNwCy7l4EjzxRk3wZjKecCwo29v6dUPYJtQETbjAjP%2FAyVVV50OyvJKEOkmMvOCxsmVCCW7U&X-Amz-Signature=fe392e2663e98b2d15bf35fee3c7288077c4601573c5cf15b63893a439ce1ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
