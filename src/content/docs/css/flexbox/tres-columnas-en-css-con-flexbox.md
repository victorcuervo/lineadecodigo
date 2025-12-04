---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVS5VLM6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDVEmzfqcNXIb7cVcnB%2FoneR0kT3tCQ5ywFr8DYDjSIiwIgYQAofCslT28Pdsm3ULCm2GRyiiWNQ7WR%2F%2Be5AnEweSMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLNtVrD9iW4uFjWxQSrcA%2BgyDOxnfpX45a6kDUfFTC%2Bc3BPsDAa4pHBFx9NjNBOCIwWNhaFQIJS%2BYol%2FyGzhVlIpwsjo4kc3UoyeU8cqlwn7pwkbUM%2F%2Fo8Xhmr6Mly2u2kfACOskFyHHK3F%2FmmXKS8AwCMnPhgjOe2bXfZdJe6%2Fom4fog8aORbgnY7vv6F5a6Xl%2FUkDh9lGQ7biXcS3mF89F%2Bvhn2A41ue6xkaGqPxW%2Fw8FXBviOiuI0jkWRbBhJy7J7PY29jNi6G8szX8sLutQ5SIcEP5Y6EnHv9dyfbMH5EHg1Xfj1JHsp9A9bxqbUrUzNvwzqWP5skBlR84nHXNsCf6sOIYG0RwUPSUzhD8ozoxhAKLHuEaSY6cUKQ5B6g%2Fhp54isUfIQs0k7%2Be%2FPBteifAmwx4OqOKre9tJqf7DYJfr1KpImBs1cVXLVmpzuy9FsP2UmVXxYCSWc6JCTwLtpjDhKKtewrHBPpokk2%2B%2FvzD7exZlxWFiXBQ0uXHsT40wwhZOXO9vuiI0B24WwZLNFJVagwe4DcIiwhGQo2NQEyDXZQAxt9%2B2cQzjhGnWfBFzoIHD1LoVilinwkXGEhCz9JUI1EuMUtZHseE80%2FPV8cde0VR0BaCAwp%2FjoMld0L2UaPaAOEp57%2B%2BP8MOnnxckGOqUBUvOIOaxyFyMohwzJDhHA9GdGQ0DnJVqzZgsDc1cfIZKzwuXmQnsetZMifwVcmiJIdLsJWEYwpHB3Tlsm7%2BiETKEAiCRs1d7v1pVgKXoR6LzsMkwXsRPjZwt7hSLZDmI6nEGmBpRBVl%2FGs1Op8dJEmW9YQg3qAA0PrhvRv2ycWKDC%2BNC0b0M9sgEWt%2F0JFP6SpnbmtDA4yh2WOhPVMWIbSW1FLFc7&X-Amz-Signature=3332da5b15aa1405fa519cf33d9f009401a835b2da4454156b2b296295b4ca82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVS5VLM6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDVEmzfqcNXIb7cVcnB%2FoneR0kT3tCQ5ywFr8DYDjSIiwIgYQAofCslT28Pdsm3ULCm2GRyiiWNQ7WR%2F%2Be5AnEweSMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLNtVrD9iW4uFjWxQSrcA%2BgyDOxnfpX45a6kDUfFTC%2Bc3BPsDAa4pHBFx9NjNBOCIwWNhaFQIJS%2BYol%2FyGzhVlIpwsjo4kc3UoyeU8cqlwn7pwkbUM%2F%2Fo8Xhmr6Mly2u2kfACOskFyHHK3F%2FmmXKS8AwCMnPhgjOe2bXfZdJe6%2Fom4fog8aORbgnY7vv6F5a6Xl%2FUkDh9lGQ7biXcS3mF89F%2Bvhn2A41ue6xkaGqPxW%2Fw8FXBviOiuI0jkWRbBhJy7J7PY29jNi6G8szX8sLutQ5SIcEP5Y6EnHv9dyfbMH5EHg1Xfj1JHsp9A9bxqbUrUzNvwzqWP5skBlR84nHXNsCf6sOIYG0RwUPSUzhD8ozoxhAKLHuEaSY6cUKQ5B6g%2Fhp54isUfIQs0k7%2Be%2FPBteifAmwx4OqOKre9tJqf7DYJfr1KpImBs1cVXLVmpzuy9FsP2UmVXxYCSWc6JCTwLtpjDhKKtewrHBPpokk2%2B%2FvzD7exZlxWFiXBQ0uXHsT40wwhZOXO9vuiI0B24WwZLNFJVagwe4DcIiwhGQo2NQEyDXZQAxt9%2B2cQzjhGnWfBFzoIHD1LoVilinwkXGEhCz9JUI1EuMUtZHseE80%2FPV8cde0VR0BaCAwp%2FjoMld0L2UaPaAOEp57%2B%2BP8MOnnxckGOqUBUvOIOaxyFyMohwzJDhHA9GdGQ0DnJVqzZgsDc1cfIZKzwuXmQnsetZMifwVcmiJIdLsJWEYwpHB3Tlsm7%2BiETKEAiCRs1d7v1pVgKXoR6LzsMkwXsRPjZwt7hSLZDmI6nEGmBpRBVl%2FGs1Op8dJEmW9YQg3qAA0PrhvRv2ycWKDC%2BNC0b0M9sgEWt%2F0JFP6SpnbmtDA4yh2WOhPVMWIbSW1FLFc7&X-Amz-Signature=7c3eae471a5ce83de5b7caf7c6842dcd01817930d99fdbf7b7f1d8a36e5b3055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

