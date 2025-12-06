---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7RAL35%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXQ24exH424kP%2F9ezfv3C%2FaibGNqFKXerBnDHdaoZioAiBvXThN9z9JlnWCleKo3%2Fq79b7oz%2FqxA0nykhpNdzf7jCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMyfhqGL9wMOVHenjFKtwDpoM7kNZZQavVhLAD9AEZnp7Qf5rZja%2FWQotRml5t2e4h%2BXH%2BRauerhWa67BkQSmeQqd9sjxaGuVCmC5XT97O85EhGx9rk2DRxkBEL2ft9%2FVskxWcdPdK1TEHU1fjgO3X%2FR1EXXtNB7HuXyAPrU1OzPME2UeVc4YslfMEGrB9wsVr6vswGr0%2BeS5Jc8tNR%2BHx%2F4V%2F52vsIn0UUfFlJVwp74jDOYqWjW8FiQGUD6qag8v%2Bh%2BOdqjpU4F8WbSo2ONmrxzkqTLw2VsNn%2B1pBTohjkaR3xwcT7lbpoMFy7d2N1PC2JzoxHfecm%2FvygTD58IrCSJXqPrRkgxIqpAhM%2FkuFC0E5E9VDJBPv%2FoaY7ozy8gjy4I%2F%2B4CzKfDV3eFIlpRnRWqxtfwYvvekN%2BVXs3XduoTidEFqQTn%2FIbW4BxKcmoPjk%2B9f%2BAOCIFnUUth6X7SxktNMfxtv5ytYNeguIhz17vZB%2Bf7qnW%2BvX9BY1VmALKP%2FDqS47fizrJKH1HX%2BfMiK1a3sbSIESWaajm456KA3yulOLE%2BrJ68b%2BUxu0DSiYFvQMXtqaUAwcS7SBmSH%2FgSMGQatSeFTFXcqSHcFc8wvkAxZEk8dp%2Fh%2FNZz%2FbubVXbH5y3y%2FfwtHe8HzCpGEwxNPSyQY6pgG4oYYNcmOFngqHeIT8XFsPrCtlE1Sa9qkAZPKi7%2F1vPa4K8YlUDi%2B3wuGDsAv52AeMHCC52Bi3L24l6wbyoiAAWTjVArFPJMG2d8qi8F0Kbwn0cz4lRBriQoDeGaoiK22%2FwLXTUEJZaqjVrvKdz8YYFGRV%2FTw47bX9MzJUGuzQ7sudidnRuYamZTtsXYa7pQc9oC5NHYjXuMa7Cu4%2F6eS5iS3Jb6ZQ&X-Amz-Signature=8f7caaeed41600ae38ad20f72dee17a2477f17015241b495d57dbb56043b64fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7RAL35%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXQ24exH424kP%2F9ezfv3C%2FaibGNqFKXerBnDHdaoZioAiBvXThN9z9JlnWCleKo3%2Fq79b7oz%2FqxA0nykhpNdzf7jCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMyfhqGL9wMOVHenjFKtwDpoM7kNZZQavVhLAD9AEZnp7Qf5rZja%2FWQotRml5t2e4h%2BXH%2BRauerhWa67BkQSmeQqd9sjxaGuVCmC5XT97O85EhGx9rk2DRxkBEL2ft9%2FVskxWcdPdK1TEHU1fjgO3X%2FR1EXXtNB7HuXyAPrU1OzPME2UeVc4YslfMEGrB9wsVr6vswGr0%2BeS5Jc8tNR%2BHx%2F4V%2F52vsIn0UUfFlJVwp74jDOYqWjW8FiQGUD6qag8v%2Bh%2BOdqjpU4F8WbSo2ONmrxzkqTLw2VsNn%2B1pBTohjkaR3xwcT7lbpoMFy7d2N1PC2JzoxHfecm%2FvygTD58IrCSJXqPrRkgxIqpAhM%2FkuFC0E5E9VDJBPv%2FoaY7ozy8gjy4I%2F%2B4CzKfDV3eFIlpRnRWqxtfwYvvekN%2BVXs3XduoTidEFqQTn%2FIbW4BxKcmoPjk%2B9f%2BAOCIFnUUth6X7SxktNMfxtv5ytYNeguIhz17vZB%2Bf7qnW%2BvX9BY1VmALKP%2FDqS47fizrJKH1HX%2BfMiK1a3sbSIESWaajm456KA3yulOLE%2BrJ68b%2BUxu0DSiYFvQMXtqaUAwcS7SBmSH%2FgSMGQatSeFTFXcqSHcFc8wvkAxZEk8dp%2Fh%2FNZz%2FbubVXbH5y3y%2FfwtHe8HzCpGEwxNPSyQY6pgG4oYYNcmOFngqHeIT8XFsPrCtlE1Sa9qkAZPKi7%2F1vPa4K8YlUDi%2B3wuGDsAv52AeMHCC52Bi3L24l6wbyoiAAWTjVArFPJMG2d8qi8F0Kbwn0cz4lRBriQoDeGaoiK22%2FwLXTUEJZaqjVrvKdz8YYFGRV%2FTw47bX9MzJUGuzQ7sudidnRuYamZTtsXYa7pQc9oC5NHYjXuMa7Cu4%2F6eS5iS3Jb6ZQ&X-Amz-Signature=c6a818ebfbc11fee96de3602c51f4f7b2ad1ec4fe7869ecb3207624f41818a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

