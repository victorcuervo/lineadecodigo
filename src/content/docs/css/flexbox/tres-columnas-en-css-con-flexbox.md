---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEM6MLKU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGO0x3lgboO8iecjAuZrqnBwtbLjidXtgxqejYO6Y30AiBAzjylA0bwZjEjbgV8vQ1jnyza3zBmAgfu4JqA6F72TCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMURsT2sY7tlaSNUKcKtwDqmmA75C7Xgfnyzc6QhImIDPDnYhYbxrAwFbA3Gc1IwcvysHGMN5cq7CoNXCotGE1yODx8e5GdJIYArhc0PyE3x5mwh%2FU8T0kp7K%2B2TqI5O5zAiESldTATA%2FOZUSaAY9ZRakmBj0b0jjT%2FL4ArWiuY2TLl8SlFJExUcuoK8vCRZAbEiBKLeM5kz5cgZYOQ9o5tV55qWz%2BHTxGsXuUTOheAU9zZvyfWIh0DfLMCuBJzilckh51mxpt8zgzd8Wk5VGQSsZkL6LrEmH7CQnolveYsmbaGuiOnTdQE38UtYPLH2WSHOLURDCfirX41B8w9gRj%2FWw1xH3VMGZ%2FzC2uopQkbC5qxWmo9KI4vxb1gIorx18Qx0PUR5L7DRkmun3ck0y%2BbSRecYm4UbbY%2BfeRTa%2Bi4egbNobpSiGzr5orwy67QKV0XSkR%2BB9rRL6jBU%2Fuqt5FQj%2FujT2E26eJ0oTeNqKu2uEmT3Z4i%2FoggxPxLNrj4MYz1ceDScCTQwWMYysWStvrFga1tkdCNFsxXBN8%2BNf9ZCU4JKo%2BxZIuWrrMIASeipSETzBdFpYSc%2FthHwWNGY28csRmXhUIu311qQ%2BpK1bwygruEix1YnnpfuV1n%2BA8vQeFJ2O1i3jXSp5%2FIAowvKvJyQY6pgGodKAgnjTNmEn5D5pPqXOwVhAQ42w%2FXjX%2Bk5863VKUb68ld3HsuOgkt12%2BHKKACCELNU6IDd90MznUNDTd0tmvd%2FJPwrnvM6TqLOzyURuEQyPcZFQ3zHEAE1swakX7HWBjbAF%2BtpdCeZli10q5wbE1sev2MhHoKQbw04%2Bl8Jb6KYpSWjbUZMXf7zuSeSiLP5CVvHhq4hn4pD2MCexcIxWWGFjPQpfo&X-Amz-Signature=d11ac13db41400645adf265b419302711ee84e4d1967f475a244d663b0ed5f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEM6MLKU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGO0x3lgboO8iecjAuZrqnBwtbLjidXtgxqejYO6Y30AiBAzjylA0bwZjEjbgV8vQ1jnyza3zBmAgfu4JqA6F72TCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMURsT2sY7tlaSNUKcKtwDqmmA75C7Xgfnyzc6QhImIDPDnYhYbxrAwFbA3Gc1IwcvysHGMN5cq7CoNXCotGE1yODx8e5GdJIYArhc0PyE3x5mwh%2FU8T0kp7K%2B2TqI5O5zAiESldTATA%2FOZUSaAY9ZRakmBj0b0jjT%2FL4ArWiuY2TLl8SlFJExUcuoK8vCRZAbEiBKLeM5kz5cgZYOQ9o5tV55qWz%2BHTxGsXuUTOheAU9zZvyfWIh0DfLMCuBJzilckh51mxpt8zgzd8Wk5VGQSsZkL6LrEmH7CQnolveYsmbaGuiOnTdQE38UtYPLH2WSHOLURDCfirX41B8w9gRj%2FWw1xH3VMGZ%2FzC2uopQkbC5qxWmo9KI4vxb1gIorx18Qx0PUR5L7DRkmun3ck0y%2BbSRecYm4UbbY%2BfeRTa%2Bi4egbNobpSiGzr5orwy67QKV0XSkR%2BB9rRL6jBU%2Fuqt5FQj%2FujT2E26eJ0oTeNqKu2uEmT3Z4i%2FoggxPxLNrj4MYz1ceDScCTQwWMYysWStvrFga1tkdCNFsxXBN8%2BNf9ZCU4JKo%2BxZIuWrrMIASeipSETzBdFpYSc%2FthHwWNGY28csRmXhUIu311qQ%2BpK1bwygruEix1YnnpfuV1n%2BA8vQeFJ2O1i3jXSp5%2FIAowvKvJyQY6pgGodKAgnjTNmEn5D5pPqXOwVhAQ42w%2FXjX%2Bk5863VKUb68ld3HsuOgkt12%2BHKKACCELNU6IDd90MznUNDTd0tmvd%2FJPwrnvM6TqLOzyURuEQyPcZFQ3zHEAE1swakX7HWBjbAF%2BtpdCeZli10q5wbE1sev2MhHoKQbw04%2Bl8Jb6KYpSWjbUZMXf7zuSeSiLP5CVvHhq4hn4pD2MCexcIxWWGFjPQpfo&X-Amz-Signature=3d88860afb4678e22d81d2252c733efce4a8275e0ad55ad75542f97a3bef20a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

