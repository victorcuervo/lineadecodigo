---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVKBZJFF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpWTnhtoqsc6AjhIgl0%2Bo%2FNq7c7ZK%2FHnVspW7c78YFjwIhAI%2FpaodZ91rW69xAGuRbBL%2F20DguhVUkYYIkOHGM5pxqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG9FXi3%2BVYFnidBRoq3AN7aBlDSuxq2W61Xcvi9ZgSDcYYibn7ecgUx%2BbcueJmOVHJu2n8f1UwDFbWv0fV6dhlFxDfzKhB87hcFYlClkjmACe6npezqeo%2Bb%2BVxJgaEpcdwhoJ9usiXFjy32l2G7NR4DNbtUomjmNussGCsbt2q1FbTa%2FFcbxQ1xvklCfk5Lp5vft2QTqSnwPuEiVlyRqoGgmEcrBaxvqd2kqgK5xoOWeh8uFyzKzgLu%2FITxnD6CIiKys0BdaKSw5cz3fYt9CbWr4nO%2FSF4GIOfjo8WUb99A4hdPeF7HXhzbHS470ispTVC3mD8%2BMqUTy43JFmW7Q1e7MIr51oKuLSE71c4rw68F5rUvZBFtYKrUBDojmHYReEaIrMq6VGO1KFJ5mSA84PW6AGZzZ4pauWj3boM8vtoEgQg7TS1UarUB21Oz%2B6%2FuCx%2FtAqFld7VelHhe6Oyl3gROTN5vPz96LueIN10dpZpn%2BnPhdCI9LC7lZZBEcYUPoD3Se2OFz666v4PrQetdZeNQnHhmnUuovZAXcmc8sctKlvI%2B5TPpMda4PvbiWoVH7DzVbTJQNkpJJyqdYOmgwnLmlaVWtKW5xE78R9UO8oO6RWd%2FqvLUe5zQeRex18%2F5xlVuGZ%2Bpl8vzBvWNjCt6d3JBjqkAeLf%2B31mcaCqscIJ3cTA0mWtULwWz6qNP%2BL3DaM6NskQD2IOLML1EakbYFpT0W9AilQ9I0z%2Bi%2BqD3ojphkWRwVLcXB%2B2Pq3W7laiD%2Fn92v5uZxbjObO3z9jAlXyL8KtJrpH89pJyX9FO0TKsGBNNgTfHDYOmy5QYjBMqU2s1paJuXmmqnAdCfxY48dHcbToTJTAKDcQraK34kc5RHp2Vf8itA1Zw&X-Amz-Signature=3e3c82566d0335f82701f6ebedd131c3edbc413c86c638f3af0c8385c64490c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVKBZJFF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpWTnhtoqsc6AjhIgl0%2Bo%2FNq7c7ZK%2FHnVspW7c78YFjwIhAI%2FpaodZ91rW69xAGuRbBL%2F20DguhVUkYYIkOHGM5pxqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG9FXi3%2BVYFnidBRoq3AN7aBlDSuxq2W61Xcvi9ZgSDcYYibn7ecgUx%2BbcueJmOVHJu2n8f1UwDFbWv0fV6dhlFxDfzKhB87hcFYlClkjmACe6npezqeo%2Bb%2BVxJgaEpcdwhoJ9usiXFjy32l2G7NR4DNbtUomjmNussGCsbt2q1FbTa%2FFcbxQ1xvklCfk5Lp5vft2QTqSnwPuEiVlyRqoGgmEcrBaxvqd2kqgK5xoOWeh8uFyzKzgLu%2FITxnD6CIiKys0BdaKSw5cz3fYt9CbWr4nO%2FSF4GIOfjo8WUb99A4hdPeF7HXhzbHS470ispTVC3mD8%2BMqUTy43JFmW7Q1e7MIr51oKuLSE71c4rw68F5rUvZBFtYKrUBDojmHYReEaIrMq6VGO1KFJ5mSA84PW6AGZzZ4pauWj3boM8vtoEgQg7TS1UarUB21Oz%2B6%2FuCx%2FtAqFld7VelHhe6Oyl3gROTN5vPz96LueIN10dpZpn%2BnPhdCI9LC7lZZBEcYUPoD3Se2OFz666v4PrQetdZeNQnHhmnUuovZAXcmc8sctKlvI%2B5TPpMda4PvbiWoVH7DzVbTJQNkpJJyqdYOmgwnLmlaVWtKW5xE78R9UO8oO6RWd%2FqvLUe5zQeRex18%2F5xlVuGZ%2Bpl8vzBvWNjCt6d3JBjqkAeLf%2B31mcaCqscIJ3cTA0mWtULwWz6qNP%2BL3DaM6NskQD2IOLML1EakbYFpT0W9AilQ9I0z%2Bi%2BqD3ojphkWRwVLcXB%2B2Pq3W7laiD%2Fn92v5uZxbjObO3z9jAlXyL8KtJrpH89pJyX9FO0TKsGBNNgTfHDYOmy5QYjBMqU2s1paJuXmmqnAdCfxY48dHcbToTJTAKDcQraK34kc5RHp2Vf8itA1Zw&X-Amz-Signature=02427054f94f950503efe0b3460df686a27ad4991a3b442560b9de191ed4dbe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

