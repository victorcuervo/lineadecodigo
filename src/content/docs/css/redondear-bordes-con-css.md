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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GPMUBAU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElSqnT3tJ0ZdLk3EBGtWa1Kc%2BiJQDR%2FkNoz%2FDXigtuIAiA4ADBPeYChrYnSQLPBP7JBZd5ApkJmh4Fe5Lq%2B3iiBLiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqCg%2FifKgeA0vH5uKtwDSq28yUKfRs%2FVrUz7HIktD%2B%2FfNt39OZRfwIQ2oHpI%2BlHuogJHlUH7UvXELueHkv%2BmSxE7mLd1toXYDp%2FK9M5SEdVfNwo%2FtNE1nUC3q1IagzIk7Nh%2BkdutepDJdHP8t4oQlrk4ttkwvNa%2Be7oMdJIQW%2BnHu%2BH4z4hnDCCK3bjmF6sSQM3%2B6ugVt41QF76EBXJiAnAoYoKjs4XQ2fuHuIg5IelHFcXQI0TRakbREFnuDTNi9jAtaNR8hrx0kaeusxoZT8sfGzNb1o1XGMad8kIohz056so5HgksvdiVm%2FY0MINETl8EOi5CU0tQcJfxD653FwEUzGsdSSeNah7Cq3Q4gGg6j1zVE9eKZg7twZZkg93ypTFX%2BopQVQHPVhCQe0t1ziccpwjp2RP5fUaVc%2BqSKSib4SC0E5hyj74HkQJ7jUlAtMBV1TaOCNzMaAjy%2F2rNYos%2BuzMihORlaBuAA5YbW7utQffumTwxff3g6gnzv1QQcT4vimanCbtgDFVy9FJlTtr%2FzYyKklNC1NeHfA2mRfTVSPSwxilhuoEPlqmCGJKkcJHcdh2hptyjwHQRR%2FMvp%2ByvjKkcL5mypzapi7Jv%2BI%2FrCk5X6GnzU9o17NZZe7KyYiv2X6zw4hACQTwwle%2FYyQY6pgFZUMKNuPGK1rHHvfGVQ64hi796AyxC045K%2Bn8JgYgM%2FN%2BJzXCyqT7eukLklVd8SGaZQd1PLTKbkuNzhtd7lMDQk16YQIQYFBMUztOccru19j%2FWmuCLgnpH9FRJz9DRfb4Bun7RM0VjMmehMvMizcrUP%2BiNo5nZbqFl67xeBL1QM5KRbQ84dvu76431iNhvtNTrNqzWvSCrHYDvBQLk7KrOcCAzBr%2B9&X-Amz-Signature=ef2f523feca5362d2ff06b2a113d008f9bd35af7130041a12322213da175d759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GPMUBAU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElSqnT3tJ0ZdLk3EBGtWa1Kc%2BiJQDR%2FkNoz%2FDXigtuIAiA4ADBPeYChrYnSQLPBP7JBZd5ApkJmh4Fe5Lq%2B3iiBLiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqCg%2FifKgeA0vH5uKtwDSq28yUKfRs%2FVrUz7HIktD%2B%2FfNt39OZRfwIQ2oHpI%2BlHuogJHlUH7UvXELueHkv%2BmSxE7mLd1toXYDp%2FK9M5SEdVfNwo%2FtNE1nUC3q1IagzIk7Nh%2BkdutepDJdHP8t4oQlrk4ttkwvNa%2Be7oMdJIQW%2BnHu%2BH4z4hnDCCK3bjmF6sSQM3%2B6ugVt41QF76EBXJiAnAoYoKjs4XQ2fuHuIg5IelHFcXQI0TRakbREFnuDTNi9jAtaNR8hrx0kaeusxoZT8sfGzNb1o1XGMad8kIohz056so5HgksvdiVm%2FY0MINETl8EOi5CU0tQcJfxD653FwEUzGsdSSeNah7Cq3Q4gGg6j1zVE9eKZg7twZZkg93ypTFX%2BopQVQHPVhCQe0t1ziccpwjp2RP5fUaVc%2BqSKSib4SC0E5hyj74HkQJ7jUlAtMBV1TaOCNzMaAjy%2F2rNYos%2BuzMihORlaBuAA5YbW7utQffumTwxff3g6gnzv1QQcT4vimanCbtgDFVy9FJlTtr%2FzYyKklNC1NeHfA2mRfTVSPSwxilhuoEPlqmCGJKkcJHcdh2hptyjwHQRR%2FMvp%2ByvjKkcL5mypzapi7Jv%2BI%2FrCk5X6GnzU9o17NZZe7KyYiv2X6zw4hACQTwwle%2FYyQY6pgFZUMKNuPGK1rHHvfGVQ64hi796AyxC045K%2Bn8JgYgM%2FN%2BJzXCyqT7eukLklVd8SGaZQd1PLTKbkuNzhtd7lMDQk16YQIQYFBMUztOccru19j%2FWmuCLgnpH9FRJz9DRfb4Bun7RM0VjMmehMvMizcrUP%2BiNo5nZbqFl67xeBL1QM5KRbQ84dvu76431iNhvtNTrNqzWvSCrHYDvBQLk7KrOcCAzBr%2B9&X-Amz-Signature=9027156942b98ca8785fa86c8ee23d7fbf1b0887a7a41cfd16b9e5309c1020aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
