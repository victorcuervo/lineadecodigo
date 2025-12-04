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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X664SOD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCEk%2BJK8FgnE%2B0RSoAF%2FUNCOdXdt47y%2FLxOj0l9pWej3QIgE19NrOfcvVRsuKV1g9vqRH%2BVADNq%2FjcQScIQIh8miX0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGvHvdxnKk4K%2F5I5oircAwEA4Q6ePL8SJRRY%2FL9WeSCxg5xi%2FWJBl27VnhiPiqiYCved0Q2POQfWCnz8ZUtpG3Gq9rt%2B8D5GM5crVTl95W1X5uqerFVi1MtgNpK%2Bb1Mlo3MBnHsY9Kg0uCW%2BbYJ4VvBNL7%2Fh7rkprAz9M0IPKCumKtJSty7Xn3naYXrCvg9LdnZF85kcXGcJAkTEZfuXnuUvtD8qMFTF1u9e4GZATUF%2FrXQX0SqULUGvSEJyh3PEjyneaXVY0whr2OJqjfo18PXSygIyjmK%2BBhk5WNIfeVWhJuu%2F2VOC%2FwcH%2Bn6s9OvaMA3MWbaTNSttlOPtUj4VTm%2FYVhlOs2zapuVmuf19LCwyRdl0V7rDeiD0wpc6YnhdZF%2FpT%2B3wx3cLvjI%2BhiT2zKCLLQHQ2o%2FPTdugqQ1cHGfBEEpOgCMlQffwCWSQgpj7bnvVoBb1c%2BcHKzJXKPnpbD2TDAg5hJec8Rdq%2BJzZuN6nN%2BA56X9o2Nrb9nsXpWAYGmNfWDsF%2BCpkr4CSPSuLJMzGXx7CfMQQqPdDOZbXU1OK%2Biz4UDTZIl%2FCog3ODLVkuFIdtuIOmJLMqB0CC9v%2Bl37xrCmMxAXmtx10iPE76rvppYFvYlqxl8AYDiXBeMWtTdOJ3AvgOGxbCr0%2BMKHLxMkGOqUB8fOzDoUKGA%2F%2BzhbJeULI6SMYWUrkOlZ0sRFH6OLgIRn30OgbcYJqVDMK6yDDnD4MTViAhS75xKzHSWuc6KhpAea6Io2UptOegp4olJr9wn9fPFIT%2FQSDFDx%2FwfMl24Qw7Xd5yJBWJbpBARbBl9DvNjO6S%2F%2BMWSp%2BhshyTxTFUMMy7k%2FdByEaHkp3%2F%2B9gaoMDQmp5SyFoyKZJ3%2Fnp1D0CcD%2F1pOiu&X-Amz-Signature=23d1266848ad80df979311a45580c3a4648af72f617398701cde1a8657a8e31d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X664SOD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCEk%2BJK8FgnE%2B0RSoAF%2FUNCOdXdt47y%2FLxOj0l9pWej3QIgE19NrOfcvVRsuKV1g9vqRH%2BVADNq%2FjcQScIQIh8miX0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGvHvdxnKk4K%2F5I5oircAwEA4Q6ePL8SJRRY%2FL9WeSCxg5xi%2FWJBl27VnhiPiqiYCved0Q2POQfWCnz8ZUtpG3Gq9rt%2B8D5GM5crVTl95W1X5uqerFVi1MtgNpK%2Bb1Mlo3MBnHsY9Kg0uCW%2BbYJ4VvBNL7%2Fh7rkprAz9M0IPKCumKtJSty7Xn3naYXrCvg9LdnZF85kcXGcJAkTEZfuXnuUvtD8qMFTF1u9e4GZATUF%2FrXQX0SqULUGvSEJyh3PEjyneaXVY0whr2OJqjfo18PXSygIyjmK%2BBhk5WNIfeVWhJuu%2F2VOC%2FwcH%2Bn6s9OvaMA3MWbaTNSttlOPtUj4VTm%2FYVhlOs2zapuVmuf19LCwyRdl0V7rDeiD0wpc6YnhdZF%2FpT%2B3wx3cLvjI%2BhiT2zKCLLQHQ2o%2FPTdugqQ1cHGfBEEpOgCMlQffwCWSQgpj7bnvVoBb1c%2BcHKzJXKPnpbD2TDAg5hJec8Rdq%2BJzZuN6nN%2BA56X9o2Nrb9nsXpWAYGmNfWDsF%2BCpkr4CSPSuLJMzGXx7CfMQQqPdDOZbXU1OK%2Biz4UDTZIl%2FCog3ODLVkuFIdtuIOmJLMqB0CC9v%2Bl37xrCmMxAXmtx10iPE76rvppYFvYlqxl8AYDiXBeMWtTdOJ3AvgOGxbCr0%2BMKHLxMkGOqUB8fOzDoUKGA%2F%2BzhbJeULI6SMYWUrkOlZ0sRFH6OLgIRn30OgbcYJqVDMK6yDDnD4MTViAhS75xKzHSWuc6KhpAea6Io2UptOegp4olJr9wn9fPFIT%2FQSDFDx%2FwfMl24Qw7Xd5yJBWJbpBARbBl9DvNjO6S%2F%2BMWSp%2BhshyTxTFUMMy7k%2FdByEaHkp3%2F%2B9gaoMDQmp5SyFoyKZJ3%2Fnp1D0CcD%2F1pOiu&X-Amz-Signature=116162563907ded467184481505956e6c0d4ec98980c02283a2707ec142bbef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
