---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA4524S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCO9R8Ttl%2BKqCRc0Q17uRd6kQOvTHwl0sr%2FYuJytzyDCwIgVIo7fCTboHRUqUfkhfchHkgRrWvLu3P42knbXFFGY6kq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDP06BJkOJAQBrrrzHCrcA3bpNF6VmK5oS5JtoMh920GLUtCQkdn8%2BTQiQUQ85Vm6m5gbDFq9I4Gukm2lbU7u%2BZBSMpW7bHW9lPET5kOoBWOMk%2B7OirthhdJQfc58uEv42rStt3QLu8OU45cDrytzq3U34YHLW50KH64HJ63AU38Mn7H1HWe0YAxf2JsRZvGYD2Q20PCzNxaKoYJq5BOc73EpimRS94TgOvcFhnNlFD8Hd2n%2FuzwFqLvFQmWVSWk2U2Qv9DjdehNEHx%2FlqQS83u9i7Qt%2B1FbUjVldB7xEGWNkOnkDywzGW0Rg%2FGNVMuo2iQFqWwPYweDQ9lHaCgdxeOpbqh2kzexZube2dHC8IwwwP1t6w%2FKtyYn3HPw0nA0LjU6lXSDK4Xl6C7AaCRm32mVOyMZ5DPve4OeAEZk1eb4k%2F5QKwsXZUPErDckL%2FGOFjlvY%2BKRYG%2BCV4%2BF3qvhJychk1SokNJ9bVbnFCtfbcMYrlLBIxmzaCYOIDsHyLl3E2Wlju6OkFbIEog9Q0kx%2Bv1kpsfS6cd6eXNh808OCcMgVdM%2BgkPcw77XL0JxI1R3x5A9LKX0hVWYmZV1EID6UU91g3twaXxKmmIXPrfAujDc3bLHy5%2Bwixk55%2BrLcfzRt2ZdW8s4kgKHmDtkMMMKExskGOqUBBqG5Uui9AAIqepm7dxWiZPe4RDaL%2FMS7G4b85vAeUsfRLdAXVtSE36deyTsnj0itkb2Dk8xcQXbATEAr7TQtGPPCHdG%2BgGEfBSPPF8xPKQqf7vSQj7AmduNd0he0wLiI0uZhJYi%2FmAZVTNynoqkSD2ca5ItmzfKy79TLbhPqZz8BbT7f9ZxX6jRWzftRyIXpNAJYhe9MEarRzqkXtccIT6S2hEuE&X-Amz-Signature=fa77ee918836b5c0eb70128a7670ade7b13fa57aac74fad8f603415aef1f3974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA4524S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCO9R8Ttl%2BKqCRc0Q17uRd6kQOvTHwl0sr%2FYuJytzyDCwIgVIo7fCTboHRUqUfkhfchHkgRrWvLu3P42knbXFFGY6kq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDP06BJkOJAQBrrrzHCrcA3bpNF6VmK5oS5JtoMh920GLUtCQkdn8%2BTQiQUQ85Vm6m5gbDFq9I4Gukm2lbU7u%2BZBSMpW7bHW9lPET5kOoBWOMk%2B7OirthhdJQfc58uEv42rStt3QLu8OU45cDrytzq3U34YHLW50KH64HJ63AU38Mn7H1HWe0YAxf2JsRZvGYD2Q20PCzNxaKoYJq5BOc73EpimRS94TgOvcFhnNlFD8Hd2n%2FuzwFqLvFQmWVSWk2U2Qv9DjdehNEHx%2FlqQS83u9i7Qt%2B1FbUjVldB7xEGWNkOnkDywzGW0Rg%2FGNVMuo2iQFqWwPYweDQ9lHaCgdxeOpbqh2kzexZube2dHC8IwwwP1t6w%2FKtyYn3HPw0nA0LjU6lXSDK4Xl6C7AaCRm32mVOyMZ5DPve4OeAEZk1eb4k%2F5QKwsXZUPErDckL%2FGOFjlvY%2BKRYG%2BCV4%2BF3qvhJychk1SokNJ9bVbnFCtfbcMYrlLBIxmzaCYOIDsHyLl3E2Wlju6OkFbIEog9Q0kx%2Bv1kpsfS6cd6eXNh808OCcMgVdM%2BgkPcw77XL0JxI1R3x5A9LKX0hVWYmZV1EID6UU91g3twaXxKmmIXPrfAujDc3bLHy5%2Bwixk55%2BrLcfzRt2ZdW8s4kgKHmDtkMMMKExskGOqUBBqG5Uui9AAIqepm7dxWiZPe4RDaL%2FMS7G4b85vAeUsfRLdAXVtSE36deyTsnj0itkb2Dk8xcQXbATEAr7TQtGPPCHdG%2BgGEfBSPPF8xPKQqf7vSQj7AmduNd0he0wLiI0uZhJYi%2FmAZVTNynoqkSD2ca5ItmzfKy79TLbhPqZz8BbT7f9ZxX6jRWzftRyIXpNAJYhe9MEarRzqkXtccIT6S2hEuE&X-Amz-Signature=4e1ef320c6b240ad80e6ce1ab68440547ebb9b7840dad823f70ce50b1c7b0ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

