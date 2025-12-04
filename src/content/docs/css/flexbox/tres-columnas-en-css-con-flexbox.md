---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFXW2A6D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGY5nOOMgg3h3ou63tOJRZv6z2oZKP%2FNib8n5bGWt1ryAiByHJW8yYZkGDY2nUgttw8j8PdhkHnDwV1hoMwjXSRvIir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMU%2Fy%2F44%2FTUJ223yU0KtwD6FDXQObzL5kSoVXd4g%2BZcrDDBOROmE0gYxndokN1xgQ3HhtTYRR1yq3YPAyStoKO%2BqlKyRc0VSYg%2FyLK4m5zxnG9HG7YVuJUHDx9xA6zPvJhlFt%2FpFX8y%2BfrdPCuShOHEC%2F8erTV7dGxWkR0u05CLB%2BDrh%2Bik6RfzE8CG9u7WlWrbgkgG3GyE6fs7JhArV6nn7T4MpLVs%2FdsNe2RN2FFGYDskeW%2Ft9tOVYUXo0IBRTUJ3UKLsa1axI2Jgb8I87cKKhzrHzUKLZW1IzGh%2BKo7I%2FawNad4Ack1XR5Vbpn%2F9PHfrGXPREks%2BFw0Vk8%2FalKVbVLviY%2BAWY3Wj4ZkiM8RWKBXYr%2Bfb1haNOk1ouX4ItEgPybk%2Bt6ELYEhkTKMhryyQv11TYS8TCJnmZURQlumUks9wcasGwQIgHq6QCh%2F5%2FlyTulSHOOd5zSCOJHMDDGwm58uFMcnIs4PopgqCWr5ORCSBsbr05fow070hCpAtypOMnCocEOyCNT0zyfdYK5uqmZq0wpTFRkVhWhkiP3OVrkoSthQM3co3FFZqJGqkdqvZQ1cAv68AXx6xTYkidnvt%2FMQEIKDg841xCggRyL%2Bm5wHdT7sGetXcCUrQ8oa1gMeAXnU63nWOhh5a9kwg%2FXDyQY6pgHRa9m8LFtBnMtBOtCxKoGA%2FZMo%2B2PzZiGJm2t7MSSxwf8P1R%2FaELPaXOViKfNoNJr7lLKk8BwPEtwCQ9jKlNqakLZ76Nt0gGLUInXytNXq%2Bvvy%2F7jZmrgj47OqO2nhbKi52t%2B%2B8qcr6LtF0X6k4lo7kLqRQJTWlOlB0EefYvue2UQylG4zj9FvKrJMg1RyTsyuV93DugIroKUsCnXKkvj8%2BBqBZoLc&X-Amz-Signature=9800028be5612de997581eb6176b8509fe4193208055649f1cb4c28dd638c458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFXW2A6D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGY5nOOMgg3h3ou63tOJRZv6z2oZKP%2FNib8n5bGWt1ryAiByHJW8yYZkGDY2nUgttw8j8PdhkHnDwV1hoMwjXSRvIir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMU%2Fy%2F44%2FTUJ223yU0KtwD6FDXQObzL5kSoVXd4g%2BZcrDDBOROmE0gYxndokN1xgQ3HhtTYRR1yq3YPAyStoKO%2BqlKyRc0VSYg%2FyLK4m5zxnG9HG7YVuJUHDx9xA6zPvJhlFt%2FpFX8y%2BfrdPCuShOHEC%2F8erTV7dGxWkR0u05CLB%2BDrh%2Bik6RfzE8CG9u7WlWrbgkgG3GyE6fs7JhArV6nn7T4MpLVs%2FdsNe2RN2FFGYDskeW%2Ft9tOVYUXo0IBRTUJ3UKLsa1axI2Jgb8I87cKKhzrHzUKLZW1IzGh%2BKo7I%2FawNad4Ack1XR5Vbpn%2F9PHfrGXPREks%2BFw0Vk8%2FalKVbVLviY%2BAWY3Wj4ZkiM8RWKBXYr%2Bfb1haNOk1ouX4ItEgPybk%2Bt6ELYEhkTKMhryyQv11TYS8TCJnmZURQlumUks9wcasGwQIgHq6QCh%2F5%2FlyTulSHOOd5zSCOJHMDDGwm58uFMcnIs4PopgqCWr5ORCSBsbr05fow070hCpAtypOMnCocEOyCNT0zyfdYK5uqmZq0wpTFRkVhWhkiP3OVrkoSthQM3co3FFZqJGqkdqvZQ1cAv68AXx6xTYkidnvt%2FMQEIKDg841xCggRyL%2Bm5wHdT7sGetXcCUrQ8oa1gMeAXnU63nWOhh5a9kwg%2FXDyQY6pgHRa9m8LFtBnMtBOtCxKoGA%2FZMo%2B2PzZiGJm2t7MSSxwf8P1R%2FaELPaXOViKfNoNJr7lLKk8BwPEtwCQ9jKlNqakLZ76Nt0gGLUInXytNXq%2Bvvy%2F7jZmrgj47OqO2nhbKi52t%2B%2B8qcr6LtF0X6k4lo7kLqRQJTWlOlB0EefYvue2UQylG4zj9FvKrJMg1RyTsyuV93DugIroKUsCnXKkvj8%2BBqBZoLc&X-Amz-Signature=ad3fc02393d8a640a94f6635c9584be40bbed27ebb82076d8a3854f969767f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

