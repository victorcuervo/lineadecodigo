---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622EJPSZY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4MjQmm%2FoO3hFcxpAqyGcAZi%2BIQ%2FvVXha6tinjCx%2BxYwIgGNDLOcAolfJxrk8VMYvWDCu5q80Zn3cR1fNJ7RLmKfkq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKtudAzyjD5%2Ffl4PaircA1QxMYXpfO6xCup26eDNGDILP3FR0CU9YDmpeQY7xwlNcocuaJ5Pcl%2Big9BP25CZVa173xfoUJQYa9XUy3f15kTlbbYzortMVkzOqGWwIg5scxv8SBXJoMXF0rUsK0u38WOlvhkF%2FwDknm%2FRjVJp2iBDyT86eU%2FVQQEWNw4Ga5oiGEpJgCEZIsQRkU358Z9jJn3nK%2F46bN6OATf5rh94lGCkEMUu5BhOqQELUliOzLbmB6%2F5NZEz8SJ2fm%2BtgHQ43sXAdPF4wKYxWEyVjxcMhYoKggECARbECSJZ4hRytazJ%2BWu5S6sEF79jw9j8E%2F1BAbhq%2FFiBxBCLDCxW51OMgSMDloC3Z24O4eHLtfWIAjgYmbuwEomTQ3ZdwJMdvmLj7FVrVL1ODb9Xh4YuvE957FN18YwkThfE9ItHQ24ZbfVHpXn0CtiJLiDNfBdPFbK4hOriCSXr4VHnCLuhyXHKGCXyy%2F15D5H9uI%2Fkuy%2BHgQW0Fau4jVfz%2FphabKh5%2BPaRNXxvOTLv%2BeHW010t0xoS%2FyBlQP2qY%2FEcFxdxsKsy%2FQJxkSAOBG1QsIseqlpoAgvM7zUpQFqdJClw6EuPRK62vRrUA1G2%2F9TP40m2l9tDpjXIzzz4owJpVzpxiFS%2FMIfIyskGOqUBxNfVlhR7K1J7yJIFthUR0eCCklaumFaXmoL5YVey4Z0tKLhuB%2FpGdtUVCsrvy4nO9UjJNlXEExkHJ96%2FbHi6eAI9tim0%2BDIrep6of02sOiQJfM%2Bl6OZU4a569l%2BlxGfC1A7js235Gq482q8q6IEx%2F6xxfyhUN33iQfRGYwQTve%2BOC%2FFfI8aueKeZM6ECzRPob%2BEVrh5Wd4e3ivoCLxGg98%2Bxqy5B&X-Amz-Signature=1f7e2ff4bcfbeeadee7b508fb4059dcabd8f891184c4b74eabbe2045daacd1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622EJPSZY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4MjQmm%2FoO3hFcxpAqyGcAZi%2BIQ%2FvVXha6tinjCx%2BxYwIgGNDLOcAolfJxrk8VMYvWDCu5q80Zn3cR1fNJ7RLmKfkq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKtudAzyjD5%2Ffl4PaircA1QxMYXpfO6xCup26eDNGDILP3FR0CU9YDmpeQY7xwlNcocuaJ5Pcl%2Big9BP25CZVa173xfoUJQYa9XUy3f15kTlbbYzortMVkzOqGWwIg5scxv8SBXJoMXF0rUsK0u38WOlvhkF%2FwDknm%2FRjVJp2iBDyT86eU%2FVQQEWNw4Ga5oiGEpJgCEZIsQRkU358Z9jJn3nK%2F46bN6OATf5rh94lGCkEMUu5BhOqQELUliOzLbmB6%2F5NZEz8SJ2fm%2BtgHQ43sXAdPF4wKYxWEyVjxcMhYoKggECARbECSJZ4hRytazJ%2BWu5S6sEF79jw9j8E%2F1BAbhq%2FFiBxBCLDCxW51OMgSMDloC3Z24O4eHLtfWIAjgYmbuwEomTQ3ZdwJMdvmLj7FVrVL1ODb9Xh4YuvE957FN18YwkThfE9ItHQ24ZbfVHpXn0CtiJLiDNfBdPFbK4hOriCSXr4VHnCLuhyXHKGCXyy%2F15D5H9uI%2Fkuy%2BHgQW0Fau4jVfz%2FphabKh5%2BPaRNXxvOTLv%2BeHW010t0xoS%2FyBlQP2qY%2FEcFxdxsKsy%2FQJxkSAOBG1QsIseqlpoAgvM7zUpQFqdJClw6EuPRK62vRrUA1G2%2F9TP40m2l9tDpjXIzzz4owJpVzpxiFS%2FMIfIyskGOqUBxNfVlhR7K1J7yJIFthUR0eCCklaumFaXmoL5YVey4Z0tKLhuB%2FpGdtUVCsrvy4nO9UjJNlXEExkHJ96%2FbHi6eAI9tim0%2BDIrep6of02sOiQJfM%2Bl6OZU4a569l%2BlxGfC1A7js235Gq482q8q6IEx%2F6xxfyhUN33iQfRGYwQTve%2BOC%2FFfI8aueKeZM6ECzRPob%2BEVrh5Wd4e3ivoCLxGg98%2Bxqy5B&X-Amz-Signature=45f8362bb25adda14cb04492f8aea131346c23bb73673dc271c42715d0b4bfbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

