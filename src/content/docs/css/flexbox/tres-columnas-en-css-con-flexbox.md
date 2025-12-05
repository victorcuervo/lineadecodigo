---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXRCXGA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCylTDj85iiKT679JN%2BqwMRZ6uajLk4N6DfK%2F%2FZU%2B5eYwIhAKLlm2OSwsZ7izY3JIwlKP%2BEKHpFbjBSa7FlXJEXZraRKv8DCFoQABoMNjM3NDIzMTgzODA1IgywBNSKnxrLmYALAQcq3AMxzsGxENB7Zuf9MSdniBe3%2F3F%2BBOcqQXrW0hd%2FwklrO8LXEsjVJzDqBa4416hZCcB3BbYFO7Z1pTXXiOfTD4d1QkicLRUOfEa10PNI4xMd4MfvgySf31BI06dLlZTTfraYQrilUnF%2F%2FwxTx6G0aZmaLu8Gi4YwHNYequkjvh%2BEc3WTV5mb69Rf1DND2kJp6hf7kRK%2FS%2BhDIpWNL114uG5UO0q9MkFOjIGRDZKs2u0dNtT4mtfsRkfdOlwEHivj73Dt6ztacpTLi4J6lAwlnRN8JroNfpZPp5Agcr%2FzCkvyzAUauDHQqBkAQ78uqm%2FIShkIxvrIX9dpHnbw20JXZ6FrGVq%2BXXOwRkADH49A3ltdAmQDni%2Fxhz%2BeVQkZ9PL7GxXZYAWZJtxdWLY6QNnWbScunpMGUqIM%2Bp%2F1jNE27ZZx%2Fh0u%2Bm4HWhyi9FtAt0zuHenq7sbjIM0VSBXgJKtyBwN%2Bgb9s3yaJJyAEv%2BrNWrlH5SQFfTOJGQ8PH3bg2kdcEz4w3PdPF2iwGtfe2kzV7%2BnuEFtXxu4%2Fosw1aBjr%2BoPk4wcbwrXHuT72yQrMZEPx3k3aIAnmwmLeAXGFTukYaF5OhPbHm%2FJGn9ZH7IATds%2FIxV7XCjYFw2ztSJtjXjCfxsrJBjqkAXfyLNK63KSUhSQe25C7cwiXgwyUopoITRnwl6dRqtneweQ9fxsh7lCpyZjL7oy%2BYMzaulO6CMWtjTZqo9QTySQT3xIcCeAAE8QdNi6KDTXlOxmewOJ95oQni%2B8b7qzM1qbiNPoPQTWTf%2B7Ze0sFgsKHACQdEs%2FAOZQ8y%2F0O3HmnwJ0g7tonCJqhH1es2361uPAMvP2jqPfTh4Xj7eKDa2wavWJA&X-Amz-Signature=2a058b1728086d4df135972863c5eface745bbd850f48ee4301809a6987042a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXRCXGA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCylTDj85iiKT679JN%2BqwMRZ6uajLk4N6DfK%2F%2FZU%2B5eYwIhAKLlm2OSwsZ7izY3JIwlKP%2BEKHpFbjBSa7FlXJEXZraRKv8DCFoQABoMNjM3NDIzMTgzODA1IgywBNSKnxrLmYALAQcq3AMxzsGxENB7Zuf9MSdniBe3%2F3F%2BBOcqQXrW0hd%2FwklrO8LXEsjVJzDqBa4416hZCcB3BbYFO7Z1pTXXiOfTD4d1QkicLRUOfEa10PNI4xMd4MfvgySf31BI06dLlZTTfraYQrilUnF%2F%2FwxTx6G0aZmaLu8Gi4YwHNYequkjvh%2BEc3WTV5mb69Rf1DND2kJp6hf7kRK%2FS%2BhDIpWNL114uG5UO0q9MkFOjIGRDZKs2u0dNtT4mtfsRkfdOlwEHivj73Dt6ztacpTLi4J6lAwlnRN8JroNfpZPp5Agcr%2FzCkvyzAUauDHQqBkAQ78uqm%2FIShkIxvrIX9dpHnbw20JXZ6FrGVq%2BXXOwRkADH49A3ltdAmQDni%2Fxhz%2BeVQkZ9PL7GxXZYAWZJtxdWLY6QNnWbScunpMGUqIM%2Bp%2F1jNE27ZZx%2Fh0u%2Bm4HWhyi9FtAt0zuHenq7sbjIM0VSBXgJKtyBwN%2Bgb9s3yaJJyAEv%2BrNWrlH5SQFfTOJGQ8PH3bg2kdcEz4w3PdPF2iwGtfe2kzV7%2BnuEFtXxu4%2Fosw1aBjr%2BoPk4wcbwrXHuT72yQrMZEPx3k3aIAnmwmLeAXGFTukYaF5OhPbHm%2FJGn9ZH7IATds%2FIxV7XCjYFw2ztSJtjXjCfxsrJBjqkAXfyLNK63KSUhSQe25C7cwiXgwyUopoITRnwl6dRqtneweQ9fxsh7lCpyZjL7oy%2BYMzaulO6CMWtjTZqo9QTySQT3xIcCeAAE8QdNi6KDTXlOxmewOJ95oQni%2B8b7qzM1qbiNPoPQTWTf%2B7Ze0sFgsKHACQdEs%2FAOZQ8y%2F0O3HmnwJ0g7tonCJqhH1es2361uPAMvP2jqPfTh4Xj7eKDa2wavWJA&X-Amz-Signature=23332f8174ebb0269c4f2e9d1b0f5d325b32609036801258abf94b786dbd983d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

