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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FB4UTW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDVHHvNKidKzU4t%2BFPZ%2B3hLY2lsEAk3MpZSoRm9GxvYKAiEA4Bhw8Um42u5AgXiqFxS2XYRC40dnABZMQEE5Xj8%2FDcIq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDG3HPBZFKgnSOR420ircA6MRSkeI9%2Bb1tqoEivc49BaTPR%2B8AlyR63UWkk9jRCoiFsCTOjZpjGi2OPmTN8lJQLU6RoJ2W8tEuLXQO2ERy6hqA1viFYuGpZnwNsz3VICTK%2FmNv4rmMOQtLAGDDyZCrxHAh0o3SQslf%2FViFVoKm0XM0LksGV1Bhol5mlcBx0O%2Fb2yrhJ%2ByVN82aU%2Fs%2BEeB67cUVuz4dbfNssAqqi%2FW1NGjelCQpMmHs3ACBulgjHVoUM6ZtYaAwC8EHdG0SNPaKaO0whmUQLT4jlhTVMnMUve%2B%2FPMJKADPnK4lhsdv6DRdugKUMBNstr6UvU2lzjqOgbOBE4Es3%2FiyMcIax4Aux7fdhPM%2Fl6wbfYSd7tAFBQB34faKUSwY4tVpqm2sisaTgPUJ%2BJBj%2BsyYYKczXyFolyYSnh1s2riwEJphz9AT%2Bk5gnXZ%2B5sQkTK5iz9aOOFinQ5rbfFCLY5lRMiAmW0V18Rk6BHrZzLxWQlFydKyXOz%2BcTlVElm96TjtSwnGYUZGGaknm5ImyATUUadO6NjKtM0SqhsWkXUZPh8hGBjqWLf8c5%2F6w88DOqZaMRub%2B83wgTmKh%2BuqbsErSbgBurC7NWPIctcws6chyK71b5rpci0z42Sp%2FbcoEfBM9xPqXMMHJxckGOqUBrIFPuq2MR92aRY1j3RaxFih1CYuQaKKjQNKL7mCFNDwA89WmL8kaqDuQ5im0f%2BzshezQ%2FyiYU%2FhY%2B607BAz9wjSho3qK7tpGeS%2BkdFJPMI2l3jscDiyZ9WQU492a0SRNcKtfy5qalcwqnvNhRP6BPIESxoqP0VjsFjuMh1J%2BDHOp5N%2FmaOftYqWE6NV%2FlxCc4JWhsRTkwphcLFjnn2YVQRuRuSoa&X-Amz-Signature=36e1a66545a1fbfd1ca06c4f130a51cb6e4d8f8a48116b15fc2372aeff156845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FB4UTW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDVHHvNKidKzU4t%2BFPZ%2B3hLY2lsEAk3MpZSoRm9GxvYKAiEA4Bhw8Um42u5AgXiqFxS2XYRC40dnABZMQEE5Xj8%2FDcIq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDG3HPBZFKgnSOR420ircA6MRSkeI9%2Bb1tqoEivc49BaTPR%2B8AlyR63UWkk9jRCoiFsCTOjZpjGi2OPmTN8lJQLU6RoJ2W8tEuLXQO2ERy6hqA1viFYuGpZnwNsz3VICTK%2FmNv4rmMOQtLAGDDyZCrxHAh0o3SQslf%2FViFVoKm0XM0LksGV1Bhol5mlcBx0O%2Fb2yrhJ%2ByVN82aU%2Fs%2BEeB67cUVuz4dbfNssAqqi%2FW1NGjelCQpMmHs3ACBulgjHVoUM6ZtYaAwC8EHdG0SNPaKaO0whmUQLT4jlhTVMnMUve%2B%2FPMJKADPnK4lhsdv6DRdugKUMBNstr6UvU2lzjqOgbOBE4Es3%2FiyMcIax4Aux7fdhPM%2Fl6wbfYSd7tAFBQB34faKUSwY4tVpqm2sisaTgPUJ%2BJBj%2BsyYYKczXyFolyYSnh1s2riwEJphz9AT%2Bk5gnXZ%2B5sQkTK5iz9aOOFinQ5rbfFCLY5lRMiAmW0V18Rk6BHrZzLxWQlFydKyXOz%2BcTlVElm96TjtSwnGYUZGGaknm5ImyATUUadO6NjKtM0SqhsWkXUZPh8hGBjqWLf8c5%2F6w88DOqZaMRub%2B83wgTmKh%2BuqbsErSbgBurC7NWPIctcws6chyK71b5rpci0z42Sp%2FbcoEfBM9xPqXMMHJxckGOqUBrIFPuq2MR92aRY1j3RaxFih1CYuQaKKjQNKL7mCFNDwA89WmL8kaqDuQ5im0f%2BzshezQ%2FyiYU%2FhY%2B607BAz9wjSho3qK7tpGeS%2BkdFJPMI2l3jscDiyZ9WQU492a0SRNcKtfy5qalcwqnvNhRP6BPIESxoqP0VjsFjuMh1J%2BDHOp5N%2FmaOftYqWE6NV%2FlxCc4JWhsRTkwphcLFjnn2YVQRuRuSoa&X-Amz-Signature=99e45f185fbaf99b46aa418431625bc55495b421cd30ab75e3253a60033c5b46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
