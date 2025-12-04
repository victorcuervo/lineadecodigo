---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKZDHHLU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIA2%2BqHOfu3TU%2FDb1X1I3EiiromvhVJXXCLb4AGatGAoUAiAk780fjA0d0p88lMjP8GKHKG4EpLq3KHGjVti9rgnn2ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZ3eUg%2FG%2BhxOoDX2MKtwDKkaeHmqGHm17V10uc%2BMhbL72bOl4%2BTweEDa7%2Fhj0oX62HQ6MGclrDVdazmVG%2FGCHn3Fvd28jrmbC5eg%2FaI7fWWIVS6Bes2wKCbZuHrjJODQ9JYpjr4UxB0B8g2txHVbW3rcfyIJC4kTtSP4MXoaPJSgbLxT%2Fil5wZZqKdCfSyvx9rQgaNxy576deLcHpZBcisQp5QHWLfP4kfRMFwZtT2blEH3B%2BjEN0Irt3ahIX77XdvyPsZWBvpznv3hKqEtvbVu%2FGsQAY2DCDtIxIjgxJqEd2VAl9fkLcW2CoatDJ56xXSUj6K7My6oTGNGgyAoHrCc5RVd2m8nymUI1WyRqEUAqFARt%2FPOBCrdcVPhaQZrjOuRSU7jLZth7Ghat81Dp0lHvAdaJQUgDX1qmQFrX1YM4p1rgv2y0J5nQwpqASSr%2BHxEQhhXTjLB600Hr%2BfzmxTz400CeOQ9RokLkmcV%2FI7C2gYSg0%2BcCOJ5YFNoFpyywJdgsK3lAab5RAaNBYL4VghaB7eTDk0Hp9lvezSb%2FFIb2E9hytVFl0utHp21xc%2FRknQRdAzGGUIobGiSH9o%2FsOAgFu5CjF%2FfUsG5uzDxraTbd4EmHibpp8%2BXj%2F95m79GDJuQroYiyJt3zwffww9b7GyQY6pgGfF1QoGlDB30jmJEsAJPw6VI8HtCkLc9woQbSM4Xypns8DvBo%2FPznnOCEzxhpbfDOP%2B07jkO0xdsnlIZljaJULIBwXkSsM6gcv9uCFwRyGG3VentdY%2FrZnFZaFRwhHltWzkdZS2olpFz%2BhyTtLq5zYrWDMYMB63uI6JUpwyEQ%2BgljgGCiwfyj6Oxc5gQcjaeimoiKEHHSQm%2Bo3ouSNxG3bnsWE0Nxz&X-Amz-Signature=a5db85881c0e2c628aae49c1821f973c0e40cd15434e063c2d2a29d0d92d926a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKZDHHLU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIA2%2BqHOfu3TU%2FDb1X1I3EiiromvhVJXXCLb4AGatGAoUAiAk780fjA0d0p88lMjP8GKHKG4EpLq3KHGjVti9rgnn2ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZ3eUg%2FG%2BhxOoDX2MKtwDKkaeHmqGHm17V10uc%2BMhbL72bOl4%2BTweEDa7%2Fhj0oX62HQ6MGclrDVdazmVG%2FGCHn3Fvd28jrmbC5eg%2FaI7fWWIVS6Bes2wKCbZuHrjJODQ9JYpjr4UxB0B8g2txHVbW3rcfyIJC4kTtSP4MXoaPJSgbLxT%2Fil5wZZqKdCfSyvx9rQgaNxy576deLcHpZBcisQp5QHWLfP4kfRMFwZtT2blEH3B%2BjEN0Irt3ahIX77XdvyPsZWBvpznv3hKqEtvbVu%2FGsQAY2DCDtIxIjgxJqEd2VAl9fkLcW2CoatDJ56xXSUj6K7My6oTGNGgyAoHrCc5RVd2m8nymUI1WyRqEUAqFARt%2FPOBCrdcVPhaQZrjOuRSU7jLZth7Ghat81Dp0lHvAdaJQUgDX1qmQFrX1YM4p1rgv2y0J5nQwpqASSr%2BHxEQhhXTjLB600Hr%2BfzmxTz400CeOQ9RokLkmcV%2FI7C2gYSg0%2BcCOJ5YFNoFpyywJdgsK3lAab5RAaNBYL4VghaB7eTDk0Hp9lvezSb%2FFIb2E9hytVFl0utHp21xc%2FRknQRdAzGGUIobGiSH9o%2FsOAgFu5CjF%2FfUsG5uzDxraTbd4EmHibpp8%2BXj%2F95m79GDJuQroYiyJt3zwffww9b7GyQY6pgGfF1QoGlDB30jmJEsAJPw6VI8HtCkLc9woQbSM4Xypns8DvBo%2FPznnOCEzxhpbfDOP%2B07jkO0xdsnlIZljaJULIBwXkSsM6gcv9uCFwRyGG3VentdY%2FrZnFZaFRwhHltWzkdZS2olpFz%2BhyTtLq5zYrWDMYMB63uI6JUpwyEQ%2BgljgGCiwfyj6Oxc5gQcjaeimoiKEHHSQm%2Bo3ouSNxG3bnsWE0Nxz&X-Amz-Signature=775f42e4b85d2aac271e6975d3b5c0ad1b50492081312c8e8341c24cc7b66a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

