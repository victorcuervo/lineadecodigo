---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AO2COHN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjat5dymQU%2FoYoCHFWKtGTxusrX0dBmOoGhA0imlhT6wIhAOt9wQEEkEnFV01VadTcuiu6bvoJxTPbXfhhSZcBo26LKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw84St8qdp%2FnIcxBVEq3AO1b2af5nJnP37%2FGpfJ8CDzzLFncr0ASwG%2FKKGq%2FIHd4BMINJjNNaWTaEVWTE%2FGRQOjAN%2FfBFu6TsBZQCL0zpswXopOapa57IqGq65hTKwH1S6yMlhlK0Aci0SLvhqQYZ6EqcDJD%2FX1VODwjLG6NTM%2FlXqVsYsqJCEYbHuXcuO%2FdibZYhZ03TaInYmTpXwUQ24gI%2F5wf9HmlLrR4Y5YYAi5JW%2FI8feGweWu69yRC2%2Bdo3%2FV0K5cUO%2BGR2yYtOilL6crTN%2F8mWkN0BIRzvThlIUP2Nt%2FZ8nLeDXNoxd7%2BXqS1QBTX3w1g6tqC%2BbAdRgWZ6bDVeisFy6daBWa%2FlNbUDPcDvT%2FvHQfzbtoukvdt5zy1rShMV%2FFGmmEKB5tgJjtPpTjK6QxoHkz9iwSWsLALnvRMWjHkCMx0IHKGZdC%2FshkV6mmTeAycIKHN6HQAnjj9Ay25RBknzUv7D0IanZJRj8Y7Ybs91xVFQztt%2FESD16%2BPctHHbdUv%2BfVQkMZq7Iad9BvSs4umOQX8lvpBGtnPho1liaSDFbyQfRlCAv1De5cqZpCsbcA7aVjN96laWvdcfXN981d7MakCu1lwtMyjyWjc2zZYI%2BqlA9%2Bm9QpUPRp0ruUcA8Z%2Br1OX4%2BhsDCKqNfJBjqkAQPfcg8oX7QVE9zrx39aP5aN%2FZJe7i%2FyYtaxv4zOOAPCYuf9smEFaV5TrN%2B1nW9zG2GpTlPWzre%2Fsw49KiifdXI2Rk2DAlf9irzUzJ3EgtdU2NL5A6q7UR4wuaKG8hkq%2BfqRhrSnGRUGRI79OvUB%2Bv9mSeqOLSmUkaxDsonPX8eZhr8TPqh6wANuTbY3MoitmRY9tIYjq%2Fk5YDrMV88hC660DG4D&X-Amz-Signature=4435d2db0d380feb4dc6d7bf9e8d513a7452b236344afdabb96ff84917225234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AO2COHN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjat5dymQU%2FoYoCHFWKtGTxusrX0dBmOoGhA0imlhT6wIhAOt9wQEEkEnFV01VadTcuiu6bvoJxTPbXfhhSZcBo26LKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw84St8qdp%2FnIcxBVEq3AO1b2af5nJnP37%2FGpfJ8CDzzLFncr0ASwG%2FKKGq%2FIHd4BMINJjNNaWTaEVWTE%2FGRQOjAN%2FfBFu6TsBZQCL0zpswXopOapa57IqGq65hTKwH1S6yMlhlK0Aci0SLvhqQYZ6EqcDJD%2FX1VODwjLG6NTM%2FlXqVsYsqJCEYbHuXcuO%2FdibZYhZ03TaInYmTpXwUQ24gI%2F5wf9HmlLrR4Y5YYAi5JW%2FI8feGweWu69yRC2%2Bdo3%2FV0K5cUO%2BGR2yYtOilL6crTN%2F8mWkN0BIRzvThlIUP2Nt%2FZ8nLeDXNoxd7%2BXqS1QBTX3w1g6tqC%2BbAdRgWZ6bDVeisFy6daBWa%2FlNbUDPcDvT%2FvHQfzbtoukvdt5zy1rShMV%2FFGmmEKB5tgJjtPpTjK6QxoHkz9iwSWsLALnvRMWjHkCMx0IHKGZdC%2FshkV6mmTeAycIKHN6HQAnjj9Ay25RBknzUv7D0IanZJRj8Y7Ybs91xVFQztt%2FESD16%2BPctHHbdUv%2BfVQkMZq7Iad9BvSs4umOQX8lvpBGtnPho1liaSDFbyQfRlCAv1De5cqZpCsbcA7aVjN96laWvdcfXN981d7MakCu1lwtMyjyWjc2zZYI%2BqlA9%2Bm9QpUPRp0ruUcA8Z%2Br1OX4%2BhsDCKqNfJBjqkAQPfcg8oX7QVE9zrx39aP5aN%2FZJe7i%2FyYtaxv4zOOAPCYuf9smEFaV5TrN%2B1nW9zG2GpTlPWzre%2Fsw49KiifdXI2Rk2DAlf9irzUzJ3EgtdU2NL5A6q7UR4wuaKG8hkq%2BfqRhrSnGRUGRI79OvUB%2Bv9mSeqOLSmUkaxDsonPX8eZhr8TPqh6wANuTbY3MoitmRY9tIYjq%2Fk5YDrMV88hC660DG4D&X-Amz-Signature=8ca62fd44004e9c5729c067b5edca0e71f42364426155e7e3baaae999c890631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

