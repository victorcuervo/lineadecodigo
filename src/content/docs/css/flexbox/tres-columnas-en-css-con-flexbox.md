---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAL2D2DL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWu3oaHkN%2BixQgVl2tUTrCYBPefIvMUgJGNNnNLuJ3awIgd7I%2F%2F7yTRjJ%2Fc%2BO7i9y%2BglZBu1lSbzqZChtuog4B0woq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIACxKxs00f9au9s6CrcA98aTCGNBaOBDO6Y1sNLhScM5RzsvB6MABZY6SBUjqhUrfV9VlR%2FHalRjhaQ7K06AHu3z91EIJ6dnLvQWhYdBNviPJzrjYdMQIj3I%2FRFc%2BwdM520Tq%2FUkj0esYYFA6BdQPwKn2QuiQy2F773UcLX2sbNR385gd7b3dCWmK9h24ei4zytvyY%2FZjxQTYm2v1vEQwUo7bODIkbgxRwyajwan7QSGQAjQHA9oh03E3Rsn1COqbVbGdL6eX4EKvYZYDFlOGdu7oNothJyDU4kOyiRw8RmX5OpKXsl8uN6721KpDsmdEAQpDId109bnPU1zyIQ4Q5v4%2B%2BXtm6nwoSz6o1yA3k53JSFmwixCfb4zb%2BiBbL2rKbXcopu%2FDWBXVEH4WccFaC7bYo9Og70y5OHHe7wPN04qJrxnRsYWqARsr0BzDGKPET87GYuRFR2743DKSk%2FkgPohVczzkYrn5E7%2BVx1OT9LOJ3%2Bmymvj7x3PXmtmDOdk1y5qpXAswANwLQUkzwFsoO0vqEI5RfgL%2F6OUd3KLOKwwvArFdS1AJHIq5i1J1uVs2jcnyVmiiYaNuUNlCNsoZpaVJpvyJjan5Be3lyNGiTM9gfGAdQ0N6PhGIl4uuVubGC20%2BTdDRXr%2FJZxMN6xyckGOqUBFxN7W%2BiQIqKaSU%2BgMpKR3IM2ighplb2sTetd5MnffEKHGLAqskbz8gfL1zpNG%2FTR7qdQGvRlVntqB6v6cwFyfUTuHqtXeo6kpYtojkslFIzzqB5VZ%2FZOTcCHEsqoqml1QJix3sSGRDhvqye8eWbPyhGkfLFuXT7tMCnow2Dx%2F1iygpr43tQ%2BcGS%2BmnuQEsl0%2Fb7Ak57mBSVQNZ8%2Fwqq22I2irYuP&X-Amz-Signature=9a5eed2878508c87cbdd6699dfed85551b396421806e240278ef91164a260a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAL2D2DL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWu3oaHkN%2BixQgVl2tUTrCYBPefIvMUgJGNNnNLuJ3awIgd7I%2F%2F7yTRjJ%2Fc%2BO7i9y%2BglZBu1lSbzqZChtuog4B0woq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIACxKxs00f9au9s6CrcA98aTCGNBaOBDO6Y1sNLhScM5RzsvB6MABZY6SBUjqhUrfV9VlR%2FHalRjhaQ7K06AHu3z91EIJ6dnLvQWhYdBNviPJzrjYdMQIj3I%2FRFc%2BwdM520Tq%2FUkj0esYYFA6BdQPwKn2QuiQy2F773UcLX2sbNR385gd7b3dCWmK9h24ei4zytvyY%2FZjxQTYm2v1vEQwUo7bODIkbgxRwyajwan7QSGQAjQHA9oh03E3Rsn1COqbVbGdL6eX4EKvYZYDFlOGdu7oNothJyDU4kOyiRw8RmX5OpKXsl8uN6721KpDsmdEAQpDId109bnPU1zyIQ4Q5v4%2B%2BXtm6nwoSz6o1yA3k53JSFmwixCfb4zb%2BiBbL2rKbXcopu%2FDWBXVEH4WccFaC7bYo9Og70y5OHHe7wPN04qJrxnRsYWqARsr0BzDGKPET87GYuRFR2743DKSk%2FkgPohVczzkYrn5E7%2BVx1OT9LOJ3%2Bmymvj7x3PXmtmDOdk1y5qpXAswANwLQUkzwFsoO0vqEI5RfgL%2F6OUd3KLOKwwvArFdS1AJHIq5i1J1uVs2jcnyVmiiYaNuUNlCNsoZpaVJpvyJjan5Be3lyNGiTM9gfGAdQ0N6PhGIl4uuVubGC20%2BTdDRXr%2FJZxMN6xyckGOqUBFxN7W%2BiQIqKaSU%2BgMpKR3IM2ighplb2sTetd5MnffEKHGLAqskbz8gfL1zpNG%2FTR7qdQGvRlVntqB6v6cwFyfUTuHqtXeo6kpYtojkslFIzzqB5VZ%2FZOTcCHEsqoqml1QJix3sSGRDhvqye8eWbPyhGkfLFuXT7tMCnow2Dx%2F1iygpr43tQ%2BcGS%2BmnuQEsl0%2Fb7Ak57mBSVQNZ8%2Fwqq22I2irYuP&X-Amz-Signature=0e7a3eabd65509cc6d0c07b0967c69f5a440501db70ba1f22e12e38e4efa380f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

