---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHUPGUJ2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHhvcS6oQCP8siZbtEgmkES3YhwRXc5LZsXG1HJFZPfkAiEA0OOO8sS40%2BYYMcPpbQLSi6nQ1Ykay5pvZrJmI027s0kq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFdvtP5WoQ1bm22CfircA6%2FuXhryqe3ENIZh4NNKVfYlu3x5NcwE7Mup0mFYVt75avyowoI0UXFAE3iKPcs092z8tQvTjr%2BXn0rGFA6u9QFtoKWDJY28K97q%2B40Sq07TKTqcSsAaZ732wpe%2BPPHR6GRiZGnxqpDht5YgtM7d%2B5F3yEr4C19vZqNhlTlzp8yfdQXDhFstiBeFcYDLKwScnyzVFpSX%2BdZLtPnaq01qATfZsBppPTuxluOamwJ81%2F11VSSnoHjugp9LZEPdI%2BtqdFH8o3XPP7YOMnrMmFcwA%2FG%2Fep8gx3w9GEsuOmO1Y3mJgMf7MPocFWNL2MxykBoO9WbYtKYAYPQDo3QAhMqROGXZHR%2BnjP260hkhGptivwFsfcUKBLERzK3p%2F6qo3CHdTGONDkrnnV4mh4Q0lc50lh7Wcdj8NLjjm6fsif%2FmXimEKYCpgawA8i7gZaesX857oPknS6LEOPUT3ACRuEJbMo8tqFFMaahCILzhw0Fs6XsngrEfBRDF%2FFeJ8Kmvuta6mNHPEUeeLh%2FhpOR0gJoRXIbkip83FNEEgSxaCoI1sZHizEWsjuVOOII1e8X%2Bcp2lnakrmiEd7RpkrgLUwBaGnYj8clGM27tToGjS97Wbh%2FKUNwqGIMlDwDrKF%2FPvMPirxckGOqUBJPE8PCyl9w4MhFQF8oSGYWCtfjKMXX86vYvfOCxhtgNICQIvAjfLwXk5TzNgU3w9pWWZiHOeYpA850nze9dLxoVJEnyf2%2B%2FX8Fdo33avpN6b25BSaxjMFUl8oA%2FHnXBNtI2wjHjaN7hzPlMi15CFCv9TrbqGUkJxRu1ceNDZbfVdQ4rhFBC7wk6r%2F7QBVlaZgt6%2BLkACSy%2F8n8N1aZ7uiBPcabIp&X-Amz-Signature=ed8f9b7256d9e0d3674e23a2b9b5a0b4597c0050de9e59ca1ae05efed37d2a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHUPGUJ2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHhvcS6oQCP8siZbtEgmkES3YhwRXc5LZsXG1HJFZPfkAiEA0OOO8sS40%2BYYMcPpbQLSi6nQ1Ykay5pvZrJmI027s0kq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFdvtP5WoQ1bm22CfircA6%2FuXhryqe3ENIZh4NNKVfYlu3x5NcwE7Mup0mFYVt75avyowoI0UXFAE3iKPcs092z8tQvTjr%2BXn0rGFA6u9QFtoKWDJY28K97q%2B40Sq07TKTqcSsAaZ732wpe%2BPPHR6GRiZGnxqpDht5YgtM7d%2B5F3yEr4C19vZqNhlTlzp8yfdQXDhFstiBeFcYDLKwScnyzVFpSX%2BdZLtPnaq01qATfZsBppPTuxluOamwJ81%2F11VSSnoHjugp9LZEPdI%2BtqdFH8o3XPP7YOMnrMmFcwA%2FG%2Fep8gx3w9GEsuOmO1Y3mJgMf7MPocFWNL2MxykBoO9WbYtKYAYPQDo3QAhMqROGXZHR%2BnjP260hkhGptivwFsfcUKBLERzK3p%2F6qo3CHdTGONDkrnnV4mh4Q0lc50lh7Wcdj8NLjjm6fsif%2FmXimEKYCpgawA8i7gZaesX857oPknS6LEOPUT3ACRuEJbMo8tqFFMaahCILzhw0Fs6XsngrEfBRDF%2FFeJ8Kmvuta6mNHPEUeeLh%2FhpOR0gJoRXIbkip83FNEEgSxaCoI1sZHizEWsjuVOOII1e8X%2Bcp2lnakrmiEd7RpkrgLUwBaGnYj8clGM27tToGjS97Wbh%2FKUNwqGIMlDwDrKF%2FPvMPirxckGOqUBJPE8PCyl9w4MhFQF8oSGYWCtfjKMXX86vYvfOCxhtgNICQIvAjfLwXk5TzNgU3w9pWWZiHOeYpA850nze9dLxoVJEnyf2%2B%2FX8Fdo33avpN6b25BSaxjMFUl8oA%2FHnXBNtI2wjHjaN7hzPlMi15CFCv9TrbqGUkJxRu1ceNDZbfVdQ4rhFBC7wk6r%2F7QBVlaZgt6%2BLkACSy%2F8n8N1aZ7uiBPcabIp&X-Amz-Signature=07c53f0ab4bcfaf58499f87e8b2aad218b29e6ee242a64b7d89adefa1afbc57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

