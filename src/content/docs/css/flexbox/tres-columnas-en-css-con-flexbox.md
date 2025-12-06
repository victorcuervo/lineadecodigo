---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYSID34%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwcKBaxdIOyR%2FWNcVbUlg%2FHCRbX1HR5OHwsP%2Foq9oPwAiEArC6gjRZT7%2Fo37ipk1oCYNj6xi4emlUNRtZcdVJak3tMq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGZQyZ9MiBTQJ32h9ircA2Zgblf%2B1hhkORw9A8kQTzaUShdm7SAFEJSJ2RCbNEa5EDHY7qf9W9MxZGisPzHtIJ42MmU9wKSl0PBt5hQPrNkh1b%2Fayg2I3TTe6Bu68U3TR%2FVV99VGhsS5NGH9hdQ5fWyUbS%2FgC4CJvIDfthufA1th51Hem4Fj0YXa9tDFN%2BEvp0KM4j4ADy5mr6UlB4uFoJiYzkttvs3%2FrJqPI%2FIDVc7TUOkM0Amds0zbM2IAfpGRbhoujHeHvFOJJR1xx3GrGLYC1blt6xr4jdAJobQ%2FAahLDg%2BsNYigrXvRqLeuzd76xGV%2BPLKiRpR7Wan0XTEeIfVTxlekgDAFWcUTHFKgFZ6SNC3OqMeFyz9jMMG%2Fx0ZCXOtQPokC1IAIvEJNlQ6tifgmTKKALQEMNFyKD8VkgqPqVFCXYY58d8GwA%2BYDRqHmTOmBz%2BBND1OFZlO29fIlU0cKjNQN9tlO%2BPPeP3MeE4b2V%2Frd%2BUoqvso9B%2FQJtPM8wytVbdzieor27d8v1uiOKdeVZ%2BzEQHSBE0hThI1NL7nJ2ceeMUhVDWDiutvakgz0%2F9S8R1pvHWunyr7FQsVv%2FzPfenxObz73JYlqToKYjF%2BSJxwCGEAN6y%2BVToKxtuDMgd3z7LCiWQ%2BTTJLhMLTGzckGOqUB5cnQf3vbVFPknuUSzAqzl%2BJZzyJJ3lCjv675aUI3SZvB6wjYUmCeFIXCMPB%2FQdOXS5lhw%2FKuAJhUvUMSgpB1ZOTx5eLKtJSvIY7cH2%2Fdl5gt5HiK11aF%2BHeIWL4vXvD%2BQSQxzxV9vIS3o1GGxxZpgFe4uC7SUxKH8wexCqLbJK3ek2BagvQy6WKDDn9HtTWV1JibiIMPaFZXyfUuPJ%2F9qMYQNBJi&X-Amz-Signature=24a3fdf0e53e1230d7316dea288d844710dfa74899114efd6c35ee37b1e30b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYSID34%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwcKBaxdIOyR%2FWNcVbUlg%2FHCRbX1HR5OHwsP%2Foq9oPwAiEArC6gjRZT7%2Fo37ipk1oCYNj6xi4emlUNRtZcdVJak3tMq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGZQyZ9MiBTQJ32h9ircA2Zgblf%2B1hhkORw9A8kQTzaUShdm7SAFEJSJ2RCbNEa5EDHY7qf9W9MxZGisPzHtIJ42MmU9wKSl0PBt5hQPrNkh1b%2Fayg2I3TTe6Bu68U3TR%2FVV99VGhsS5NGH9hdQ5fWyUbS%2FgC4CJvIDfthufA1th51Hem4Fj0YXa9tDFN%2BEvp0KM4j4ADy5mr6UlB4uFoJiYzkttvs3%2FrJqPI%2FIDVc7TUOkM0Amds0zbM2IAfpGRbhoujHeHvFOJJR1xx3GrGLYC1blt6xr4jdAJobQ%2FAahLDg%2BsNYigrXvRqLeuzd76xGV%2BPLKiRpR7Wan0XTEeIfVTxlekgDAFWcUTHFKgFZ6SNC3OqMeFyz9jMMG%2Fx0ZCXOtQPokC1IAIvEJNlQ6tifgmTKKALQEMNFyKD8VkgqPqVFCXYY58d8GwA%2BYDRqHmTOmBz%2BBND1OFZlO29fIlU0cKjNQN9tlO%2BPPeP3MeE4b2V%2Frd%2BUoqvso9B%2FQJtPM8wytVbdzieor27d8v1uiOKdeVZ%2BzEQHSBE0hThI1NL7nJ2ceeMUhVDWDiutvakgz0%2F9S8R1pvHWunyr7FQsVv%2FzPfenxObz73JYlqToKYjF%2BSJxwCGEAN6y%2BVToKxtuDMgd3z7LCiWQ%2BTTJLhMLTGzckGOqUB5cnQf3vbVFPknuUSzAqzl%2BJZzyJJ3lCjv675aUI3SZvB6wjYUmCeFIXCMPB%2FQdOXS5lhw%2FKuAJhUvUMSgpB1ZOTx5eLKtJSvIY7cH2%2Fdl5gt5HiK11aF%2BHeIWL4vXvD%2BQSQxzxV9vIS3o1GGxxZpgFe4uC7SUxKH8wexCqLbJK3ek2BagvQy6WKDDn9HtTWV1JibiIMPaFZXyfUuPJ%2F9qMYQNBJi&X-Amz-Signature=93f43895a9a0a56f6f3360792efd98b3030c1bceb2b341f0113339badaa7f5cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

