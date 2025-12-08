---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAB5KKH6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa4OmE80lPqUPEjng31kU03iZKA9GP5LoYWHZQ6Hg92gIgWTvKvDB9MbAxmLSZnPZL9KsKVAlRzzt%2BfK7f0056VZMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBvEOOEi0hFMsvqUyrcA0TtyNRYGeV2aGlSxkQMZQ%2BIgreIwoEAlblsuEq3JNN5LIGHMN12JNygyKz%2FpN1wdk1czCx8UzboIKuY9wweIk%2FWxidjbCfGVKB9sQgxjXgxPudb3jXSjmnqo8IbdxE3abZ5dohKcN3x1LS5FAGI9bLas5PpinSnewy59Zp3PA5rZsPjrBq%2Fy%2BU%2BIw9i030xXQ6Tby1Yn0ikRhleA3KSY8Xzp8c3IASrizgSDGvG1aBd5lSR500LLNFUB8jY4am5t5YMPjmCMpX1Kc%2BV3oCtRps0QQ92J9DUvuwejjg4WCRk9HlIMNWGDgVVqICU22j281pEuAkPkjDpR9QtNim9sZJTLPbh6Y9eBYbyJDwroV6EWj%2Fl6o1PNIPfgD537AuMmn4seJuZ5XZOCmsatoVTwG5wjvpTHmhEN%2FK3iMN4ZwDsY27ol4%2F%2BF4FpOs4K6zL9GJLmoFrUHbyNgmbWCfNg6QsHh%2BbPFnoMEusBqnXhVaKpAS4liI2UrG6jvdMw%2BRSX4n1P6XfSKiZzBgeYE1t3BXJkFdAEKqz%2B7ufQT9S1sAlOcwuniLJnzCg1hjBzsW7Y%2FC9pxm1waaWBHo%2FcTH8mm3AkC0El9vbT9Gxb1mZ1awoxGXU9IW%2Fk%2BHH1iK2mMP%2Ft2MkGOqUBRXQpDBVi3DW9AuG8jot9SRXLoqy4CbznLU73s%2FQM9OBSs8TIUzzbR%2F%2B%2BvZ5ZeA7P2IoMcNtm3DMtwIxHBxRNhsKdJbLSwlA4n4M0S4v7olmzwP5Rmaq%2FrYBGC5dbP4jiQcTme2PGh0ml%2FbhpMnYx18FP%2FKzKbVHWiRw8uRSF9GI1L5dSY0I5IMgJZpp6ivCy%2B2OagLOcvOAK9Y1TKAE4hARswPlX&X-Amz-Signature=7097842469764abccf5d3d03b690a0d64642f6d9f3b74d310862aa417d532f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAB5KKH6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa4OmE80lPqUPEjng31kU03iZKA9GP5LoYWHZQ6Hg92gIgWTvKvDB9MbAxmLSZnPZL9KsKVAlRzzt%2BfK7f0056VZMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBvEOOEi0hFMsvqUyrcA0TtyNRYGeV2aGlSxkQMZQ%2BIgreIwoEAlblsuEq3JNN5LIGHMN12JNygyKz%2FpN1wdk1czCx8UzboIKuY9wweIk%2FWxidjbCfGVKB9sQgxjXgxPudb3jXSjmnqo8IbdxE3abZ5dohKcN3x1LS5FAGI9bLas5PpinSnewy59Zp3PA5rZsPjrBq%2Fy%2BU%2BIw9i030xXQ6Tby1Yn0ikRhleA3KSY8Xzp8c3IASrizgSDGvG1aBd5lSR500LLNFUB8jY4am5t5YMPjmCMpX1Kc%2BV3oCtRps0QQ92J9DUvuwejjg4WCRk9HlIMNWGDgVVqICU22j281pEuAkPkjDpR9QtNim9sZJTLPbh6Y9eBYbyJDwroV6EWj%2Fl6o1PNIPfgD537AuMmn4seJuZ5XZOCmsatoVTwG5wjvpTHmhEN%2FK3iMN4ZwDsY27ol4%2F%2BF4FpOs4K6zL9GJLmoFrUHbyNgmbWCfNg6QsHh%2BbPFnoMEusBqnXhVaKpAS4liI2UrG6jvdMw%2BRSX4n1P6XfSKiZzBgeYE1t3BXJkFdAEKqz%2B7ufQT9S1sAlOcwuniLJnzCg1hjBzsW7Y%2FC9pxm1waaWBHo%2FcTH8mm3AkC0El9vbT9Gxb1mZ1awoxGXU9IW%2Fk%2BHH1iK2mMP%2Ft2MkGOqUBRXQpDBVi3DW9AuG8jot9SRXLoqy4CbznLU73s%2FQM9OBSs8TIUzzbR%2F%2B%2BvZ5ZeA7P2IoMcNtm3DMtwIxHBxRNhsKdJbLSwlA4n4M0S4v7olmzwP5Rmaq%2FrYBGC5dbP4jiQcTme2PGh0ml%2FbhpMnYx18FP%2FKzKbVHWiRw8uRSF9GI1L5dSY0I5IMgJZpp6ivCy%2B2OagLOcvOAK9Y1TKAE4hARswPlX&X-Amz-Signature=c0bbd794316805578cd99732dc872a1ad8a31bba75459a0398d1b190a6902027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

