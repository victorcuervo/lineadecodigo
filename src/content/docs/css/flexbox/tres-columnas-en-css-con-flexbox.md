---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM55M6D7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmCf0mgQPL9i%2FrjUjrlfpMuURZ5kb3D0AF%2FdtnkwsbhAiEAx3cJcZ3idveMi42JRyH3%2FvXy1Op%2BfcKqrwJeSP8zDQ4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMvxEqbskrPgXi62JyrcA4ZjW4rCMoRhc44Bm6Jf6BF%2BHM06eWSczFJfOH1U%2BBVgaSEvhQzojVf7Qu86GMIjfiIELu5lbYuTQBkJiTXyQdOqiOuyhjNScsf8cloorJMMVXmFMlaThe4ptVIaF9G15vYkSw35Xais1dvzwK532bN%2FYts%2FGY6gsksg5bsPquRHRJp49wwiSz9r%2FwsztI1x8vSiSz4a6yubpdeBjryC88uBZl1tSp7c1phjnzDKGx7Ad%2FdltjpfMXNGVhazjP%2BL%2BNCu9tSvNcreFFhOtWd%2FfI1fuT43%2B4l%2Bk1EP6uxq5kpCFHBKaWfIImf9lD%2FkzvtFQSxMmmo0lwclTMVnlZ2TC8Ayll6MzAbkrhhEMtG6hZncGvx6jjwwYo7kT6C1jF837OgE9LMs0PL2BpDO4QL76V9lb%2FWxJ5pKab%2F6BzNCKCfP9P%2BZMDMDtLTQ1KwQ7gfzcrxVSJexJsQxJ5KpDh1gwIGynH7xG%2FXlR00BD8Y3qvrbVmrsisN6Whld53GQo3IZ4DK9bigTqTpD%2B5d%2F8NeAch%2BP1YbElCgO%2BglHeSd49nLu%2FlZAff5Qn%2BawQhS7c8PxcliMgBcl9mPGV8%2Fo0Q6I2Jm7WxliH3F%2F0ZtqcMzoJjJ3RNURXzXf15xW%2Bh8nMIPK0ckGOqUBsb28ylgwwIY8xzCf3DbtYijf8qmmwgDDve11oTVYul17PhXYd0x%2Bdw5Rk0%2Fl4UdgKn4X7uS6oqHCq71FcFG7IBir%2B1v54VY1xBZpB83oOFZb%2BxInDKoIgUnIrMNEFsOp1OpYnxaIY29so5i9l%2FFcfTn8cH%2Bm%2F9F3kyz%2FqXI9ejFLMXaCP%2Bb16DG2XfXx3xN15M4cXrI0EQ85cTK%2BYBzAeTKmr5FB&X-Amz-Signature=2ca82d12d03bd8b8e607d3e5cd239a2ca2cf420a7e096ed90db19d251d2a8745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM55M6D7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmCf0mgQPL9i%2FrjUjrlfpMuURZ5kb3D0AF%2FdtnkwsbhAiEAx3cJcZ3idveMi42JRyH3%2FvXy1Op%2BfcKqrwJeSP8zDQ4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMvxEqbskrPgXi62JyrcA4ZjW4rCMoRhc44Bm6Jf6BF%2BHM06eWSczFJfOH1U%2BBVgaSEvhQzojVf7Qu86GMIjfiIELu5lbYuTQBkJiTXyQdOqiOuyhjNScsf8cloorJMMVXmFMlaThe4ptVIaF9G15vYkSw35Xais1dvzwK532bN%2FYts%2FGY6gsksg5bsPquRHRJp49wwiSz9r%2FwsztI1x8vSiSz4a6yubpdeBjryC88uBZl1tSp7c1phjnzDKGx7Ad%2FdltjpfMXNGVhazjP%2BL%2BNCu9tSvNcreFFhOtWd%2FfI1fuT43%2B4l%2Bk1EP6uxq5kpCFHBKaWfIImf9lD%2FkzvtFQSxMmmo0lwclTMVnlZ2TC8Ayll6MzAbkrhhEMtG6hZncGvx6jjwwYo7kT6C1jF837OgE9LMs0PL2BpDO4QL76V9lb%2FWxJ5pKab%2F6BzNCKCfP9P%2BZMDMDtLTQ1KwQ7gfzcrxVSJexJsQxJ5KpDh1gwIGynH7xG%2FXlR00BD8Y3qvrbVmrsisN6Whld53GQo3IZ4DK9bigTqTpD%2B5d%2F8NeAch%2BP1YbElCgO%2BglHeSd49nLu%2FlZAff5Qn%2BawQhS7c8PxcliMgBcl9mPGV8%2Fo0Q6I2Jm7WxliH3F%2F0ZtqcMzoJjJ3RNURXzXf15xW%2Bh8nMIPK0ckGOqUBsb28ylgwwIY8xzCf3DbtYijf8qmmwgDDve11oTVYul17PhXYd0x%2Bdw5Rk0%2Fl4UdgKn4X7uS6oqHCq71FcFG7IBir%2B1v54VY1xBZpB83oOFZb%2BxInDKoIgUnIrMNEFsOp1OpYnxaIY29so5i9l%2FFcfTn8cH%2Bm%2F9F3kyz%2FqXI9ejFLMXaCP%2Bb16DG2XfXx3xN15M4cXrI0EQ85cTK%2BYBzAeTKmr5FB&X-Amz-Signature=9d2225f75af8507821e07671cb43247d79b0766fe2ec837144844ba7ca831ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

