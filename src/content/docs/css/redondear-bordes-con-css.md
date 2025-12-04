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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UIXTSJM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHlF2DsimrQeHhIXNsUXTAPzN4r%2FiL6zF2KPO9vhxlWJAiEAzmCtEim%2BuUj33k71NnMyAqXubekdqDsEg2uiMF3UwHUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIv4ky9K%2B2yck5lQeircA%2BhbbJkx%2BoJznhUndDGecy3klIhAj3TjE6bCwJf5inZSF7NcJCeS6v6jWLq0tsWiErXQnbt8UiCNN2Z%2FrTAAC0pafqumiOmfClwqxNzrU9lHe4EmYUdRx%2BOUxlbYss0lS1qSFoA1KEFbJdmb5BOOypQqjN4M111P6GfueAEmhzorBpV8H1MltnR5n5GYPOXnFIIkTwnLwvUb4oZQgQBVCKmlhJA0YtKAlfpJlpxxW%2B3da0aTLBLmJ90zK26sFvWd%2B8tiybXzxaHOgCP7fuZGFoCWL%2Bi8cG4LM2rqfvWxc2uI%2BeTiyn%2FF%2BP3NJUQiUzEt9zG9CFMyLk0Rr17b9LDZMNHoDrNS0Q8H6K7mboPFZGCgEiK8cffeSOTwmW2NpXsAUGRtzTtaS8S3dON9dMuSZGs89%2F0FLXT8oTkOSAkCTyid1JNPsLw8EA0DexDfyedP2LUAA0N0d%2FRqMeWr8jxC5h3tQ1ZAl644qgYayfLAk7RN69uXSjW77i%2Fdgd7hLHipIVASzduZaKOVAbiXEfc3sW30%2F1XPdsl6%2Bxb4HOV0bt4Dql33yuzMzTSzZkK8ck%2FoKqoQg6pV%2FE%2F09HN%2BIu0h9j6gGa9TbR0LGT149an6ZEAAKl%2Fz%2BgEv52ktvkuZMMODxskGOqUBmjbr7%2BvmzV0mrr4qoMuZOZlzDmdUyipy4MltqadiJqTnifNzQXcWvbvIirG%2B7OXAYUO%2F0pnWqLPEtJCNvJpMcjpjESJXVB336YFqyqoa34jvwyDsGZK8sROI8B%2B5HBtNQHE1KcruGgAt%2BOYY50W719JlVrK%2FUKG%2BkUUeHqlnzrIvQhJ1m1yrOHVr%2BAOLcehHp9rTDXRSi5cSHVOezVB9NePagCne&X-Amz-Signature=3552fa78a587d4c616a6585753a6904fe36e74352b358a42d9bcd5c3a45ec4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UIXTSJM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHlF2DsimrQeHhIXNsUXTAPzN4r%2FiL6zF2KPO9vhxlWJAiEAzmCtEim%2BuUj33k71NnMyAqXubekdqDsEg2uiMF3UwHUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIv4ky9K%2B2yck5lQeircA%2BhbbJkx%2BoJznhUndDGecy3klIhAj3TjE6bCwJf5inZSF7NcJCeS6v6jWLq0tsWiErXQnbt8UiCNN2Z%2FrTAAC0pafqumiOmfClwqxNzrU9lHe4EmYUdRx%2BOUxlbYss0lS1qSFoA1KEFbJdmb5BOOypQqjN4M111P6GfueAEmhzorBpV8H1MltnR5n5GYPOXnFIIkTwnLwvUb4oZQgQBVCKmlhJA0YtKAlfpJlpxxW%2B3da0aTLBLmJ90zK26sFvWd%2B8tiybXzxaHOgCP7fuZGFoCWL%2Bi8cG4LM2rqfvWxc2uI%2BeTiyn%2FF%2BP3NJUQiUzEt9zG9CFMyLk0Rr17b9LDZMNHoDrNS0Q8H6K7mboPFZGCgEiK8cffeSOTwmW2NpXsAUGRtzTtaS8S3dON9dMuSZGs89%2F0FLXT8oTkOSAkCTyid1JNPsLw8EA0DexDfyedP2LUAA0N0d%2FRqMeWr8jxC5h3tQ1ZAl644qgYayfLAk7RN69uXSjW77i%2Fdgd7hLHipIVASzduZaKOVAbiXEfc3sW30%2F1XPdsl6%2Bxb4HOV0bt4Dql33yuzMzTSzZkK8ck%2FoKqoQg6pV%2FE%2F09HN%2BIu0h9j6gGa9TbR0LGT149an6ZEAAKl%2Fz%2BgEv52ktvkuZMMODxskGOqUBmjbr7%2BvmzV0mrr4qoMuZOZlzDmdUyipy4MltqadiJqTnifNzQXcWvbvIirG%2B7OXAYUO%2F0pnWqLPEtJCNvJpMcjpjESJXVB336YFqyqoa34jvwyDsGZK8sROI8B%2B5HBtNQHE1KcruGgAt%2BOYY50W719JlVrK%2FUKG%2BkUUeHqlnzrIvQhJ1m1yrOHVr%2BAOLcehHp9rTDXRSi5cSHVOezVB9NePagCne&X-Amz-Signature=8c932d607f9a8eaca8d10464de0a477c3bf17f493adecee6adbcd4416bd86842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
