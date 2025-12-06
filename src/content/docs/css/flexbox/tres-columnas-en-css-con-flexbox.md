---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HASVXQX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHypSrXfz57aMyVam9DkYAQ8FQ5i%2BAJxwSz8aLqqllHQIgfdTjZWiLCX1OE10Upo6MMKTMkt5a4oLXKoiZTtezVMgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOIr9wkjDkzSGIlGKyrcA1plEE%2FySyAa6SM%2BugvO0X2LafDwbHCSC5atC2nijxKO4z3RzNrW9mYHiWklNuiOU3FoCCvTQbAEUyG9AECEelkUL%2FcX%2FkYl%2B9BPbG9jXaYf7fNszQOOPxzuwpLiqOY%2Bcmu7bcetzp2Mxu3hOuKGUswHZ7CjJzBqyO8TWPmX0%2FB0zwt4MOv48OQc2Xx4rDk2wLf6QGnyZdNocxWne3qDMSPG2SMFFxEu1burlDbCK6aXW7NJl%2BVgtfoGrvu78rs4sgFfFuAD9jz3N23gl%2FyH0RkyT8vxRT1wbmKlkPsCB%2BEn9weHCffycaCJ8CM95IKYmocLkjpodsFhhWf6gyC1p72fqj2L7WHtdbSWjUWCXKZ92n0rGv6sVFEQSaas2lutAxFfzmeYkTGDEZYnPN3gHy093%2FGaLKTMRdzGTTIDGZGZAXq0mauBrwNQqsMT8H4w4zZ5WD%2B8NZBqkFY2EvyFaIuS9FdLTK4p2bH2%2Fv6z3BVw4%2Fn%2FKBTfRdSMAaKLRCOdSCvOJ3JotR2xgQGlqlPyjEcxwu1nEYoM6BzGjfO%2FcWWHzTu0kAzC6P1ogH82J%2FCL%2BQ9xtCyowYKuxadzqsNp0nHe%2BYuHyQMLUVzsx4eaeAp9ZNPNgIQZuNQd%2FHa0MJ%2FezskGOqUB%2B3pMH75D8eWQ1JoPLyAWupYqu0odN3%2BWKIHigzARzKqCvIn%2BitZRG%2FabdV4NipTESICFqdWcdwEwyN4jggcxnlk8tbbI1%2FfBBIPmEGNJ3NO4ewfbe%2F0TqKOUg3pODEHZoguv0Kdjus6nIoa%2B3qHkNsByZWxsGZEE656q9v9xNEYq5beB%2FAPtlop2LEvMgw6rycxKx%2BFZvyt91F3%2BtPbcKt9Q4PUS&X-Amz-Signature=bd2b96590a849f736f7cacf1137632af3be62f2de993d9e9f006947ff8e32a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HASVXQX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHypSrXfz57aMyVam9DkYAQ8FQ5i%2BAJxwSz8aLqqllHQIgfdTjZWiLCX1OE10Upo6MMKTMkt5a4oLXKoiZTtezVMgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOIr9wkjDkzSGIlGKyrcA1plEE%2FySyAa6SM%2BugvO0X2LafDwbHCSC5atC2nijxKO4z3RzNrW9mYHiWklNuiOU3FoCCvTQbAEUyG9AECEelkUL%2FcX%2FkYl%2B9BPbG9jXaYf7fNszQOOPxzuwpLiqOY%2Bcmu7bcetzp2Mxu3hOuKGUswHZ7CjJzBqyO8TWPmX0%2FB0zwt4MOv48OQc2Xx4rDk2wLf6QGnyZdNocxWne3qDMSPG2SMFFxEu1burlDbCK6aXW7NJl%2BVgtfoGrvu78rs4sgFfFuAD9jz3N23gl%2FyH0RkyT8vxRT1wbmKlkPsCB%2BEn9weHCffycaCJ8CM95IKYmocLkjpodsFhhWf6gyC1p72fqj2L7WHtdbSWjUWCXKZ92n0rGv6sVFEQSaas2lutAxFfzmeYkTGDEZYnPN3gHy093%2FGaLKTMRdzGTTIDGZGZAXq0mauBrwNQqsMT8H4w4zZ5WD%2B8NZBqkFY2EvyFaIuS9FdLTK4p2bH2%2Fv6z3BVw4%2Fn%2FKBTfRdSMAaKLRCOdSCvOJ3JotR2xgQGlqlPyjEcxwu1nEYoM6BzGjfO%2FcWWHzTu0kAzC6P1ogH82J%2FCL%2BQ9xtCyowYKuxadzqsNp0nHe%2BYuHyQMLUVzsx4eaeAp9ZNPNgIQZuNQd%2FHa0MJ%2FezskGOqUB%2B3pMH75D8eWQ1JoPLyAWupYqu0odN3%2BWKIHigzARzKqCvIn%2BitZRG%2FabdV4NipTESICFqdWcdwEwyN4jggcxnlk8tbbI1%2FfBBIPmEGNJ3NO4ewfbe%2F0TqKOUg3pODEHZoguv0Kdjus6nIoa%2B3qHkNsByZWxsGZEE656q9v9xNEYq5beB%2FAPtlop2LEvMgw6rycxKx%2BFZvyt91F3%2BtPbcKt9Q4PUS&X-Amz-Signature=7bb1507723441293f2f7a04d156bc6672abfebcf3dc2994a311ba3c6503415d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

