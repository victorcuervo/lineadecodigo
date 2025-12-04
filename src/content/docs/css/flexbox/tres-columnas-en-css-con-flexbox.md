---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FGI7RTM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCsy%2BBc9XpkmZRDuR24EPudmZAtxTIcGqhDy6%2FJXe%2Fn7AIgZXlfhbKWsoD1cOLqlas2CX2ziMBojygHhNAYVTJ2HnMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMS2qLp96LfD45PlwyrcA4vpyEGy5nxVAlaFzgIxBLj7zP4f9pRTg3rYmH5RqcWHelhrSkNGQZMFeZlAWrD2L4aBe23hSOW7JpuGvkcV6G%2F0pmjfPAN7zq22%2BDBAnOB2xbrO5pnpNKNMxEKG1X9N%2F5Blp5oExuPFgfzJjRV3sUQPsddl2i3QGREWxpmCN8t%2Fg%2BI3zKHl9Ac8R5kTtjnRrowG5BueABQ3aIz31OWEZNfNCeOYageAwPIAQAk0dOOyEWiPXG%2BwVz8Xfwu1qmFJ14Gsbbm0rVprWY9SPiUqz%2B7k8N%2B0OOuzUxJMGzHQRreR8SaJ4gShJ9ZoBv2C766XHUJjmkCn7Z8qsBN5BIYIUBwcYFNA0shOWDX77qsTwgw8YAARpq62iBYNdV5V0E0IduFuCLY5sNF9ycx9gDoCz6OcuJxhvUkyNklt%2FvvRwoQ70BFOAen7ERBoSzHesKaV4MZ%2BAzbejJqrN%2FWS%2F4cidjpBTONY4NeiZ9Yqiw0lNEFky2kZGYhpow2vimurZ257A4byeFkIB88%2BRK3yjC25aX6w7%2Bwg5M7DrYro5tJpoDccymwrmm4vCz5Vt5qV2v2zuEUKVIH5e%2Fcrhi%2F9PwjPbAUT7OQg%2BT0y91URfqzfRPSPXNYf1HGeVx0VD4TRMK3zw8kGOqUBgT%2F4BhPEocUob60VyyucN5dzT0ibRpuV2G5Odk6mK%2F%2F5bgnirfjldi%2FXJKij44OonvXUVbsbnxzq2FAzXe2V1tgwB5YqurKbPYkmh7CaDc0s9n%2BMiseu4L1xDUF3BApZdPfhkepS14O8H4FGt%2Bszx%2BkoV11DLw0MMtBcixfYXEmINakFpfBE9oFa0qcKlnh%2F3588uKBuLK4EzYfJ%2B08CBXaFBMoR&X-Amz-Signature=67bcb3cbe711f0f9bad47e1407e774c67a65d4eb0f9b54bf94d1101ae08cfd78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FGI7RTM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCsy%2BBc9XpkmZRDuR24EPudmZAtxTIcGqhDy6%2FJXe%2Fn7AIgZXlfhbKWsoD1cOLqlas2CX2ziMBojygHhNAYVTJ2HnMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMS2qLp96LfD45PlwyrcA4vpyEGy5nxVAlaFzgIxBLj7zP4f9pRTg3rYmH5RqcWHelhrSkNGQZMFeZlAWrD2L4aBe23hSOW7JpuGvkcV6G%2F0pmjfPAN7zq22%2BDBAnOB2xbrO5pnpNKNMxEKG1X9N%2F5Blp5oExuPFgfzJjRV3sUQPsddl2i3QGREWxpmCN8t%2Fg%2BI3zKHl9Ac8R5kTtjnRrowG5BueABQ3aIz31OWEZNfNCeOYageAwPIAQAk0dOOyEWiPXG%2BwVz8Xfwu1qmFJ14Gsbbm0rVprWY9SPiUqz%2B7k8N%2B0OOuzUxJMGzHQRreR8SaJ4gShJ9ZoBv2C766XHUJjmkCn7Z8qsBN5BIYIUBwcYFNA0shOWDX77qsTwgw8YAARpq62iBYNdV5V0E0IduFuCLY5sNF9ycx9gDoCz6OcuJxhvUkyNklt%2FvvRwoQ70BFOAen7ERBoSzHesKaV4MZ%2BAzbejJqrN%2FWS%2F4cidjpBTONY4NeiZ9Yqiw0lNEFky2kZGYhpow2vimurZ257A4byeFkIB88%2BRK3yjC25aX6w7%2Bwg5M7DrYro5tJpoDccymwrmm4vCz5Vt5qV2v2zuEUKVIH5e%2Fcrhi%2F9PwjPbAUT7OQg%2BT0y91URfqzfRPSPXNYf1HGeVx0VD4TRMK3zw8kGOqUBgT%2F4BhPEocUob60VyyucN5dzT0ibRpuV2G5Odk6mK%2F%2F5bgnirfjldi%2FXJKij44OonvXUVbsbnxzq2FAzXe2V1tgwB5YqurKbPYkmh7CaDc0s9n%2BMiseu4L1xDUF3BApZdPfhkepS14O8H4FGt%2Bszx%2BkoV11DLw0MMtBcixfYXEmINakFpfBE9oFa0qcKlnh%2F3588uKBuLK4EzYfJ%2B08CBXaFBMoR&X-Amz-Signature=2c303ff88735c6c855729f25d120c9267798732f62d281b8689815acd6fc09c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

