---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OSZ7UN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa16oru8e9zBUTtWbZneBVG%2FMcUpMRAERE7gIWviprLQIhAJ25Fe3M024Rfoyljr%2F2aYQzwx3E%2BQcMCQD54SpqItdoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWE5kdQnkdNDHwz68q3ANlsXPKPWM6CGgRM21qRb9ho1wzWPfRmISbnompzSM%2FnRYQWOtPyyZJs1NJAg%2BRi6iYJCSgVM%2FoVdVxMw%2F3WnrGK1IlmZ7TLt2FFKetJE8bgGUIv3QWilyvQezg3LXOu8U3Ds85zYP3p0rH4RER9e0iKc4G%2BxkaAd%2FJ5UQSnd1TWKxkh5uFu6DFKsSi8Zngf9Id8DHcXM1F3dG%2FHnk2E5Rkin1MFmF%2FcqCb1ZdnKwMnZ6cm1%2Fc%2BNs2QSQXi98wf8h8g1big3Q6u9rohVoPS8ZsutzrdJVqPrWHtigHBUiOAb26CMcNZH8WivX32psBk3kS5GFIGNnXVfMe28w928mdLriao1XzMjuKs%2FL%2BYeITg9yhKZ7P6WgBpCLS6%2Fg9H7T7YF4xR03oJX3aV9i2KyuDjTXw9rKnaq7R5nT7XUNBOx7xfusxh9%2BrEQmm9rbhz%2Fu8p3z1%2Fx5oGxQ2VW%2BayHpQC0kWrAmP2SfXcR9E3nnuW2%2BOuzmmT4D0hidWXm0wQ96%2B%2FZBTAtEswbu6nfXCzAS1PzvEZnGvO7Y1244lQrvMJm5dNdrln3lzCFHlKGOs3fJLhiRcqnwb4YArEUFZVYYludOsAjs5nhjvayzUA3VwJlaR19tJkB4zhxa%2FeZjCo7dnJBjqkAXIDABP4GcQIZSZgwuF4b67aXZEZG9XuMIyzmiS%2BTcVFAw6xgnf5JaNQxWiI%2FEZxuiTho4evO81q8RleQMct%2BktuTlx7Y0yLMQt7oQtCcdR0ne8oMrbMz8KFdfx9jWrTC%2BPSakVVHZF0qfA9WRTdkLXSEAwe5a%2FiKtK9%2FlG0XmLvdy8vbK3s7TLiMWMYX0lGLXu4qQxXTEJrMqSVDjB54rUYBXab&X-Amz-Signature=8f6b7ed2fb13f17fedc10ef927191bf0dcd8de7fb65bcdeb7766433a9c2f25e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OSZ7UN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa16oru8e9zBUTtWbZneBVG%2FMcUpMRAERE7gIWviprLQIhAJ25Fe3M024Rfoyljr%2F2aYQzwx3E%2BQcMCQD54SpqItdoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWE5kdQnkdNDHwz68q3ANlsXPKPWM6CGgRM21qRb9ho1wzWPfRmISbnompzSM%2FnRYQWOtPyyZJs1NJAg%2BRi6iYJCSgVM%2FoVdVxMw%2F3WnrGK1IlmZ7TLt2FFKetJE8bgGUIv3QWilyvQezg3LXOu8U3Ds85zYP3p0rH4RER9e0iKc4G%2BxkaAd%2FJ5UQSnd1TWKxkh5uFu6DFKsSi8Zngf9Id8DHcXM1F3dG%2FHnk2E5Rkin1MFmF%2FcqCb1ZdnKwMnZ6cm1%2Fc%2BNs2QSQXi98wf8h8g1big3Q6u9rohVoPS8ZsutzrdJVqPrWHtigHBUiOAb26CMcNZH8WivX32psBk3kS5GFIGNnXVfMe28w928mdLriao1XzMjuKs%2FL%2BYeITg9yhKZ7P6WgBpCLS6%2Fg9H7T7YF4xR03oJX3aV9i2KyuDjTXw9rKnaq7R5nT7XUNBOx7xfusxh9%2BrEQmm9rbhz%2Fu8p3z1%2Fx5oGxQ2VW%2BayHpQC0kWrAmP2SfXcR9E3nnuW2%2BOuzmmT4D0hidWXm0wQ96%2B%2FZBTAtEswbu6nfXCzAS1PzvEZnGvO7Y1244lQrvMJm5dNdrln3lzCFHlKGOs3fJLhiRcqnwb4YArEUFZVYYludOsAjs5nhjvayzUA3VwJlaR19tJkB4zhxa%2FeZjCo7dnJBjqkAXIDABP4GcQIZSZgwuF4b67aXZEZG9XuMIyzmiS%2BTcVFAw6xgnf5JaNQxWiI%2FEZxuiTho4evO81q8RleQMct%2BktuTlx7Y0yLMQt7oQtCcdR0ne8oMrbMz8KFdfx9jWrTC%2BPSakVVHZF0qfA9WRTdkLXSEAwe5a%2FiKtK9%2FlG0XmLvdy8vbK3s7TLiMWMYX0lGLXu4qQxXTEJrMqSVDjB54rUYBXab&X-Amz-Signature=e686034f716e448de0581ed55aa947a03c70f84a4498b280d97846769ab75cd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

