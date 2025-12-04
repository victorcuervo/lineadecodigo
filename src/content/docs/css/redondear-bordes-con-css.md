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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDX3W6GX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDFYmArTktqZf15LR%2BQyzBuU4gWCfSBGyhc51D7i3EH0wIhAMLIq%2BMCf%2Bt%2BOVJedKPR8AnPWwD9zvlH7RdpO5KBLUtrKv8DCEgQABoMNjM3NDIzMTgzODA1Igxlb99J2n0T4NhXuVAq3APCZrzmhVKYP0BN1e6kSKelp9l0tQkj0W7orBNnTk9d4JbBFJQeF3xDsvW2mFk8RAA9HRLkD1VUR1jex2qA71qSULegeoA9Y5QudQQzbfJmxxNl%2FrsF6Y6ddCT7IVuoubcoYFIfPavUYCkcewTOHI5dGqgyNbpVrz2eAb9tsm29WhlplWxz9y%2BqJA8%2Bwai4sQcGJXr2HCg4vqQ7oqab3S5MrVnLB5SDAd%2Fm2vhkOiU3BAqftXwmWVW2aH5S9UdineF2VUG7pKQ3xzp%2Bbk4U5UKqGKWbE7IQHCsH7I1SgCHpO4sShAdmnij3OlBnYEf6Nl%2BkcFOX8oDlE2ZdensBlweYwAZqTDDJ4Qh4IX%2BkFznaIWlCq37pbKdfTAdNBwxrYlumW%2BecN%2FhYJe1aFxI2aguMO3xs8iwKg6F4bxBIhm2vw2TLDJIZ9vz%2BZHRw6kSliVM5dxSlgK5Zw70IfZlyb7Dgsr272RwWZrJUn3L7jA4FOipNgjPUPCvZwN%2FTecN8Q4ISwC89bOSUqOwMvOMkR9At%2BjqSP8ffBrigtldHXM%2BPt%2BB%2FJhMKv6nLr4kh95YmPD7z7wC%2BTJTz4Htet%2Bqo55i0xxa70jBM5S6RJbtNiou%2FIXM1RfNlyvLbQLtm7DDVvsbJBjqkASFZhHAy9n6eihHl2nFT9GQ2WPkt3x2UpsPDsHiDzvn1o3PPFZm4331xhl22MWmf7kTsVMhZ0MKLhYwbbp5AXgWH%2FPdhxHhm1KhljtWYZpiR7VpXjqPQDpWbaCY9vr0sJ8CmbLC6%2BVE6XhZDz0ovFhoXI85T%2BRrV3fK8%2FtuN3sMNVdSZFSWMCXHF0nrUXbspNOtoUmejRvRymA3PW7LTQtw%2FllVi&X-Amz-Signature=a3baa6f056e54a8a48447c1fa611e6902ce7b179c19cb4873dac99c427c345e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDX3W6GX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDFYmArTktqZf15LR%2BQyzBuU4gWCfSBGyhc51D7i3EH0wIhAMLIq%2BMCf%2Bt%2BOVJedKPR8AnPWwD9zvlH7RdpO5KBLUtrKv8DCEgQABoMNjM3NDIzMTgzODA1Igxlb99J2n0T4NhXuVAq3APCZrzmhVKYP0BN1e6kSKelp9l0tQkj0W7orBNnTk9d4JbBFJQeF3xDsvW2mFk8RAA9HRLkD1VUR1jex2qA71qSULegeoA9Y5QudQQzbfJmxxNl%2FrsF6Y6ddCT7IVuoubcoYFIfPavUYCkcewTOHI5dGqgyNbpVrz2eAb9tsm29WhlplWxz9y%2BqJA8%2Bwai4sQcGJXr2HCg4vqQ7oqab3S5MrVnLB5SDAd%2Fm2vhkOiU3BAqftXwmWVW2aH5S9UdineF2VUG7pKQ3xzp%2Bbk4U5UKqGKWbE7IQHCsH7I1SgCHpO4sShAdmnij3OlBnYEf6Nl%2BkcFOX8oDlE2ZdensBlweYwAZqTDDJ4Qh4IX%2BkFznaIWlCq37pbKdfTAdNBwxrYlumW%2BecN%2FhYJe1aFxI2aguMO3xs8iwKg6F4bxBIhm2vw2TLDJIZ9vz%2BZHRw6kSliVM5dxSlgK5Zw70IfZlyb7Dgsr272RwWZrJUn3L7jA4FOipNgjPUPCvZwN%2FTecN8Q4ISwC89bOSUqOwMvOMkR9At%2BjqSP8ffBrigtldHXM%2BPt%2BB%2FJhMKv6nLr4kh95YmPD7z7wC%2BTJTz4Htet%2Bqo55i0xxa70jBM5S6RJbtNiou%2FIXM1RfNlyvLbQLtm7DDVvsbJBjqkASFZhHAy9n6eihHl2nFT9GQ2WPkt3x2UpsPDsHiDzvn1o3PPFZm4331xhl22MWmf7kTsVMhZ0MKLhYwbbp5AXgWH%2FPdhxHhm1KhljtWYZpiR7VpXjqPQDpWbaCY9vr0sJ8CmbLC6%2BVE6XhZDz0ovFhoXI85T%2BRrV3fK8%2FtuN3sMNVdSZFSWMCXHF0nrUXbspNOtoUmejRvRymA3PW7LTQtw%2FllVi&X-Amz-Signature=f9c7d85921e816bc529015493bcadb9579110568f37d1aafacb23ffb2608ff5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
