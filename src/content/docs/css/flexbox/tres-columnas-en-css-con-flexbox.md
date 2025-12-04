---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSE3Z6G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEtW0djUZz%2BeX0IoOx2zVHhpGxP%2B2oxlAh9F0eP67o6cAiAfCzrysL9nJutAEY1AmMLc%2FA0QLGdKu3YENyn1MseQICr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMJ0WMNRScFO3FVtxjKtwDQPC3lA84IXmUTFlaKtVsmuZxsTBmwbqOWN%2FVVRLPSHpAIJlT5Kv43XF%2BmZ6fzvVhhObOP7RRMoiNWmuS9p58e9fEww%2BNVFcPSL2QUeLBQ7r28OPF%2F3YqLk4mdbF81JRgNG4w7mDZpEO7u4sxBcStV9sj7%2BRCddqb7fDQ%2BNc8JXwZdmlHQIX7cDKPuPaLgYo0lFp9EmKQU8xxkzNGDarirTn%2BUJyq2NSTRWv2CR1Zjvew%2ByzbUaYcyac7fZLtXDrIrVrM27cMwmuvBnbOG9d901uePldA3FoYMZxW6lz7l%2BTNx58dk9AH43MOhGBU5S6A2jYWJaulP5CUZ3GqmpHP9lDy4L%2BA9oZDhbs%2FpQJolT7mb0hVPSnQ7LPMEB8blQpqgRQtpbdPCuzQ9G9K4lnvK%2BIu4ihUt8rV5xd2dPBQYqLCoGwlvw2ftqBIDRJ7%2BRXyzvcIk%2FJIDApkbM%2BTjxYucbV5avyFX%2FarXWvDZz2lA8bVqnXngnUeXUVGMCwSarX4gVqlNwySpguN2T4PsDoco2EgrBr7QU2oHE%2FmBpEKbj8F9FreCABEzJw2nwOkGcMPWN5TiB62e9SIRAD64tpnmNTxx9tu9fK8e%2BduWKNO9q4XWTyqcNIAzrEcOZowzYPGyQY6pgEGCR1rKAqS2m70i8kCm%2FUKjc5B7eex6pupYXv%2BUA7bWh4eQ4L7%2FCIjyreadUn8vtPK1wpSmdRiAzHlTlj4vkGs2sFCQ7v5MaMzGxa62BiEnlhIRydk%2FN%2BLYLqD%2BguhWNgSE%2Bw9VMPpNkSWnCpctMEA5C7KLAcvBkOOfoCPUWhlxTRtBEbspQqT6l%2BFXNZgN8WJS7DRPqJq9XKmbpD9YA83QRFJQAFS&X-Amz-Signature=04f3b9e29545047358b93afb3162e1644c03c3919cb46e52187783bb4b110d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSE3Z6G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEtW0djUZz%2BeX0IoOx2zVHhpGxP%2B2oxlAh9F0eP67o6cAiAfCzrysL9nJutAEY1AmMLc%2FA0QLGdKu3YENyn1MseQICr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMJ0WMNRScFO3FVtxjKtwDQPC3lA84IXmUTFlaKtVsmuZxsTBmwbqOWN%2FVVRLPSHpAIJlT5Kv43XF%2BmZ6fzvVhhObOP7RRMoiNWmuS9p58e9fEww%2BNVFcPSL2QUeLBQ7r28OPF%2F3YqLk4mdbF81JRgNG4w7mDZpEO7u4sxBcStV9sj7%2BRCddqb7fDQ%2BNc8JXwZdmlHQIX7cDKPuPaLgYo0lFp9EmKQU8xxkzNGDarirTn%2BUJyq2NSTRWv2CR1Zjvew%2ByzbUaYcyac7fZLtXDrIrVrM27cMwmuvBnbOG9d901uePldA3FoYMZxW6lz7l%2BTNx58dk9AH43MOhGBU5S6A2jYWJaulP5CUZ3GqmpHP9lDy4L%2BA9oZDhbs%2FpQJolT7mb0hVPSnQ7LPMEB8blQpqgRQtpbdPCuzQ9G9K4lnvK%2BIu4ihUt8rV5xd2dPBQYqLCoGwlvw2ftqBIDRJ7%2BRXyzvcIk%2FJIDApkbM%2BTjxYucbV5avyFX%2FarXWvDZz2lA8bVqnXngnUeXUVGMCwSarX4gVqlNwySpguN2T4PsDoco2EgrBr7QU2oHE%2FmBpEKbj8F9FreCABEzJw2nwOkGcMPWN5TiB62e9SIRAD64tpnmNTxx9tu9fK8e%2BduWKNO9q4XWTyqcNIAzrEcOZowzYPGyQY6pgEGCR1rKAqS2m70i8kCm%2FUKjc5B7eex6pupYXv%2BUA7bWh4eQ4L7%2FCIjyreadUn8vtPK1wpSmdRiAzHlTlj4vkGs2sFCQ7v5MaMzGxa62BiEnlhIRydk%2FN%2BLYLqD%2BguhWNgSE%2Bw9VMPpNkSWnCpctMEA5C7KLAcvBkOOfoCPUWhlxTRtBEbspQqT6l%2BFXNZgN8WJS7DRPqJq9XKmbpD9YA83QRFJQAFS&X-Amz-Signature=0512f327f032514b1f2fd8f9b420b638b9e86d9a7fb28cdde26b658d32cc3b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

