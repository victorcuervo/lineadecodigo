---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDWNFPE3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFEeh%2Fepd1NUVrQjxpXj9ZuBg7%2BhQOVHvUOKL0E%2F3d46AiBRdghoS5f7wKL1dxYUfc4vFpBnL9Q587HOOx0mfdTY8ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMo0ECNTG6N%2B9XdM0IKtwDA5HZUEBCfPVYsjs78QGOSACYT6H%2Ff90smdoSPgaLQzHhXbfwx8c0fOpBGsu9z5CA3JXQGK1KvkAzJ6PJhaeFQjnFJeZZWbkt78doUUuIxP43xZkSxQiCSUzFiUOEi5xWqBRJxV6Brvtkik5DYMJwmzoJWARWI4tSLnrwP%2FEaaz%2Fbbt%2BIGLx2zd3NWj88VNMxf3URwKIzt%2B2DSiZLZdRvmL8vnXog%2BYRbJFWBTV%2BWbeJkq1bnZDmPWlNhe2oryTHag16FHY9QeOfk6LuPukALbKPin60eiJYCR6gZfYkAJZVKo4jCLTuuHH5GfZ56JQniiV%2BuY3hweA1SAnatj42p2C8GUpstLHzTkkgLC8XANblxa2swxZAyyzC8k5KXo7UWe28Tz8HTzY3RbhU9KVFPwCbSmrisIOKY9fOkTQ5N400b8R%2BjRoxCQlPc9b7h3YJuiMCpGKIU8p%2Fly%2Flk7mcoD5zkaIu%2ByZg65SQJcoPyfJHaICgvG6g2C2AvXeKSn%2FQ8oB6KYYta2rh9emDFvB6JpJTLLgfK7QQQzBWlIfbgZwpJNM4i0umqxYTFl6f8VocrIaOsgm2z11kO%2Bj7kb4yx5%2FJKTUwui6mjv%2ByQ0qCaI%2BP8YtiafNbxt%2BxteSIwl5LCyQY6pgEKeNPaxWPhdC9AMw1GZKSKOl10eIr4G75eXJH6JEDlRK%2F0P05a%2FgE%2FKRH5LFHZPFt6mTQsUGHVz76aEPBCJxB17UWIMytQ4UgLoVL8fPS4HepWc%2B1Rp5j6cGhv0arWB6f%2BuWmfsV0TxiLHchC0YxGYSK54%2FdcEwZtbgg%2FD21HpvBrAkjuPWcy8GO2%2Fuk3Bmuuz6kmAkkpOgVVvBt18He35rH38XFik&X-Amz-Signature=c09e3b079df5efec492d00bdfb250131b17d50eb709cb03a728e2c45bde9d4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDWNFPE3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFEeh%2Fepd1NUVrQjxpXj9ZuBg7%2BhQOVHvUOKL0E%2F3d46AiBRdghoS5f7wKL1dxYUfc4vFpBnL9Q587HOOx0mfdTY8ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMo0ECNTG6N%2B9XdM0IKtwDA5HZUEBCfPVYsjs78QGOSACYT6H%2Ff90smdoSPgaLQzHhXbfwx8c0fOpBGsu9z5CA3JXQGK1KvkAzJ6PJhaeFQjnFJeZZWbkt78doUUuIxP43xZkSxQiCSUzFiUOEi5xWqBRJxV6Brvtkik5DYMJwmzoJWARWI4tSLnrwP%2FEaaz%2Fbbt%2BIGLx2zd3NWj88VNMxf3URwKIzt%2B2DSiZLZdRvmL8vnXog%2BYRbJFWBTV%2BWbeJkq1bnZDmPWlNhe2oryTHag16FHY9QeOfk6LuPukALbKPin60eiJYCR6gZfYkAJZVKo4jCLTuuHH5GfZ56JQniiV%2BuY3hweA1SAnatj42p2C8GUpstLHzTkkgLC8XANblxa2swxZAyyzC8k5KXo7UWe28Tz8HTzY3RbhU9KVFPwCbSmrisIOKY9fOkTQ5N400b8R%2BjRoxCQlPc9b7h3YJuiMCpGKIU8p%2Fly%2Flk7mcoD5zkaIu%2ByZg65SQJcoPyfJHaICgvG6g2C2AvXeKSn%2FQ8oB6KYYta2rh9emDFvB6JpJTLLgfK7QQQzBWlIfbgZwpJNM4i0umqxYTFl6f8VocrIaOsgm2z11kO%2Bj7kb4yx5%2FJKTUwui6mjv%2ByQ0qCaI%2BP8YtiafNbxt%2BxteSIwl5LCyQY6pgEKeNPaxWPhdC9AMw1GZKSKOl10eIr4G75eXJH6JEDlRK%2F0P05a%2FgE%2FKRH5LFHZPFt6mTQsUGHVz76aEPBCJxB17UWIMytQ4UgLoVL8fPS4HepWc%2B1Rp5j6cGhv0arWB6f%2BuWmfsV0TxiLHchC0YxGYSK54%2FdcEwZtbgg%2FD21HpvBrAkjuPWcy8GO2%2Fuk3Bmuuz6kmAkkpOgVVvBt18He35rH38XFik&X-Amz-Signature=fbc63ed0aafe9b5ebe6a148fc808321ef94e78a5979d521575bd431e1e06e2dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

