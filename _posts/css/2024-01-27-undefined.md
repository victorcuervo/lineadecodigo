---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL7YEVSR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCtpVZvUfELazpscVfQ5gdYQwdi3qSsPG9oAv%2BzshhiUgIgHUWfYYkEx%2F2fVlhQ%2FkUKuK0Yvx5Id4kQw96kziU%2FN%2FYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKc94Hb7TgCh5aMzBCrcAzjcTmGohQ1gCnbvMxq3e%2FxyglWs2FUVIReVb0AXntDUPo2CUfvZbcYat0XR%2FC6CiJ%2FMoTtyXn58k2YZiZkp3qkvllSmMnFxwOK64CGuEZfx9tulh32n2PnCq%2BL86xib9OxiRUbehIIzrAzwTuWXx0pcmxnkMeTHtz9F9zuOO9JrQItANAYFwpPoQ%2BhZG9bjA2bOUmJQcOZaDodwrJDOAdW4azEe967ereyOgOWU6SlRYxLgCpGvXqeYkenb1va8sUW7aHZWBrW1Kv5Ox1YXUiftLxqIOUtWKbEyUpT1f5dgpXgYCmVRWxzHlN9b4tYdcHoOy%2BqkinKhx9lmQLVQ4%2BPl9ohaDG0w7lDhUAyv9GvnDZE22ABfsEXm0ProoDwg%2FzcN4KtlVdbp8D0qQA2A2Zm97f9lAgLmU%2FL8EwPz9nQtpEsl5KkoEpb2sUFRsltcskMjCzilej7S2wrQuQCFuhbE%2FSFYO9mdpXPkm%2BfrP%2Bmi7RahAWeCfml4jIB%2Bn7LTR2x3NK4KR9%2BCTYgnSJvZtQLNkTU6QHbGUzhmdRH5jC9zFVlFnnv%2BL1QowLeSw9rgnI5PCnLcf6g1Gi%2FHMhMZyRNbdJpWVt079HCs2UzelP4JUzCng%2B8oy3nJBEojMM2WvskGOqUBJEvz1adjWlrikMx4x3KjgSvnzaRsWY1iTJ9R4QdXex330%2Bnk0cztWHIgSqULOTZbisjVG4oMi%2BQpyVNMlK7LAqFFF46rUZoGRbRerjsn62yEfosydkpelOmC1aihP5yTHTQuK96rIar0D57MsNVcciZsFc7Dsq8BZoFCLdyvho4gTeAxITtP2bnNHcTj7PerJPL12YmDpvz8xupB%2FQbQnoge9f2A&X-Amz-Signature=5937fe116ebf07689392b1a125a2be9c13816ecc5600facc2871ba778aded298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL7YEVSR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCtpVZvUfELazpscVfQ5gdYQwdi3qSsPG9oAv%2BzshhiUgIgHUWfYYkEx%2F2fVlhQ%2FkUKuK0Yvx5Id4kQw96kziU%2FN%2FYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKc94Hb7TgCh5aMzBCrcAzjcTmGohQ1gCnbvMxq3e%2FxyglWs2FUVIReVb0AXntDUPo2CUfvZbcYat0XR%2FC6CiJ%2FMoTtyXn58k2YZiZkp3qkvllSmMnFxwOK64CGuEZfx9tulh32n2PnCq%2BL86xib9OxiRUbehIIzrAzwTuWXx0pcmxnkMeTHtz9F9zuOO9JrQItANAYFwpPoQ%2BhZG9bjA2bOUmJQcOZaDodwrJDOAdW4azEe967ereyOgOWU6SlRYxLgCpGvXqeYkenb1va8sUW7aHZWBrW1Kv5Ox1YXUiftLxqIOUtWKbEyUpT1f5dgpXgYCmVRWxzHlN9b4tYdcHoOy%2BqkinKhx9lmQLVQ4%2BPl9ohaDG0w7lDhUAyv9GvnDZE22ABfsEXm0ProoDwg%2FzcN4KtlVdbp8D0qQA2A2Zm97f9lAgLmU%2FL8EwPz9nQtpEsl5KkoEpb2sUFRsltcskMjCzilej7S2wrQuQCFuhbE%2FSFYO9mdpXPkm%2BfrP%2Bmi7RahAWeCfml4jIB%2Bn7LTR2x3NK4KR9%2BCTYgnSJvZtQLNkTU6QHbGUzhmdRH5jC9zFVlFnnv%2BL1QowLeSw9rgnI5PCnLcf6g1Gi%2FHMhMZyRNbdJpWVt079HCs2UzelP4JUzCng%2B8oy3nJBEojMM2WvskGOqUBJEvz1adjWlrikMx4x3KjgSvnzaRsWY1iTJ9R4QdXex330%2Bnk0cztWHIgSqULOTZbisjVG4oMi%2BQpyVNMlK7LAqFFF46rUZoGRbRerjsn62yEfosydkpelOmC1aihP5yTHTQuK96rIar0D57MsNVcciZsFc7Dsq8BZoFCLdyvho4gTeAxITtP2bnNHcTj7PerJPL12YmDpvz8xupB%2FQbQnoge9f2A&X-Amz-Signature=19ca02dacd9d54a9964e7a1b8a51c5eb687db39481f35c507ddc2554146a4375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

