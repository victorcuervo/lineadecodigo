---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466426XIYZS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCNno9Ms6ozlUIw9fIN%2FgdN8qMpBvEV35CJfCp%2By%2BVI4QIhALrtm35rablV%2FwEoM4ohvYEViDfkKwCJaeN7I%2Fk3jP6ZKv8DCDgQABoMNjM3NDIzMTgzODA1Igz1jf2Odvag2eBm6Kwq3ANk3AGqqeemd9tukjSCmymMtRir8uMJ%2ByGPddIK%2BC4d2qytldUhFKiQeIRKAPM665eWwb4Kpr0Ftq1jtZEswda%2Fd%2FqyOrnzOaVOU3pesI9aQhqRW8%2BrNwcmVKSuge7HFm30o3oe3wsTewnaiKN6rXLGXOisgMa2Y2lFz%2Fxmd2woxHmi2Skq8xuPlCPFZJ6ZRdPphKxW1G4hUk6pmmG2J%2Fit1YHgKQdl0AbrqERnqWP%2B9zp6Or%2FYjKFTwtbBzazhPVZ0eKXR7XKU%2Fq%2F531AC0%2FMWzyjZJZGnNCWG0r5MpQoOa5%2BOT2uNtDiEXgVuPgq%2BMNx7ORFSRV1PFEnhAOrIV4Ct1tx8SV1WfKRoe1wuKl97GR5cg2WU6KSPCwQl81zcqvn59E0XmbXtS55krm4JF%2Bj7E%2FFK62MALtlRvvRBxK%2FDFTF9hSgaDC%2FT8mWczcA9Z36om4e4s8rAJjtljyLh88ozRqY%2B1fYM16QRImlgiG%2BxftGX%2BZtCFDSDrdA16EHCgkYKd8g7fORKeXa1p6Ccmuh3fLX7FT3%2FxhmU3IARyfZjZahhcy9M65KaIYESuqQFOtM72I9wSbNbiLf1XxIEX84yb7I2OhalLCgiLHqHI2LdwOm%2F9%2B1o8LFRRPuO2TC%2B%2BMLJBjqkATXvnbzCe5Zv84iEu7E0oWacsqWgsDPrsug%2FRzAzZEned7bjRKWT%2BXX%2FWnEmqhZtSkWLBKSTpXIjtOb7ItCSPu5mtcBT5GKE6nvmOn5MY%2Buk5dnXtUgDbvDjFQtfgM0abglz7Kw8hx3LnWZ%2BNWUG1kygWj851YOjpR6H5B5P%2FkXTXcpbE53wu085nyhaXZ3UWv9PbmYadMFRJp6h8Zspc3eoKyiq&X-Amz-Signature=33aea926b566f01f8fb0c35517d1719fca6f4ab6e9c061b555d9bc42eea2bfcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466426XIYZS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCNno9Ms6ozlUIw9fIN%2FgdN8qMpBvEV35CJfCp%2By%2BVI4QIhALrtm35rablV%2FwEoM4ohvYEViDfkKwCJaeN7I%2Fk3jP6ZKv8DCDgQABoMNjM3NDIzMTgzODA1Igz1jf2Odvag2eBm6Kwq3ANk3AGqqeemd9tukjSCmymMtRir8uMJ%2ByGPddIK%2BC4d2qytldUhFKiQeIRKAPM665eWwb4Kpr0Ftq1jtZEswda%2Fd%2FqyOrnzOaVOU3pesI9aQhqRW8%2BrNwcmVKSuge7HFm30o3oe3wsTewnaiKN6rXLGXOisgMa2Y2lFz%2Fxmd2woxHmi2Skq8xuPlCPFZJ6ZRdPphKxW1G4hUk6pmmG2J%2Fit1YHgKQdl0AbrqERnqWP%2B9zp6Or%2FYjKFTwtbBzazhPVZ0eKXR7XKU%2Fq%2F531AC0%2FMWzyjZJZGnNCWG0r5MpQoOa5%2BOT2uNtDiEXgVuPgq%2BMNx7ORFSRV1PFEnhAOrIV4Ct1tx8SV1WfKRoe1wuKl97GR5cg2WU6KSPCwQl81zcqvn59E0XmbXtS55krm4JF%2Bj7E%2FFK62MALtlRvvRBxK%2FDFTF9hSgaDC%2FT8mWczcA9Z36om4e4s8rAJjtljyLh88ozRqY%2B1fYM16QRImlgiG%2BxftGX%2BZtCFDSDrdA16EHCgkYKd8g7fORKeXa1p6Ccmuh3fLX7FT3%2FxhmU3IARyfZjZahhcy9M65KaIYESuqQFOtM72I9wSbNbiLf1XxIEX84yb7I2OhalLCgiLHqHI2LdwOm%2F9%2B1o8LFRRPuO2TC%2B%2BMLJBjqkATXvnbzCe5Zv84iEu7E0oWacsqWgsDPrsug%2FRzAzZEned7bjRKWT%2BXX%2FWnEmqhZtSkWLBKSTpXIjtOb7ItCSPu5mtcBT5GKE6nvmOn5MY%2Buk5dnXtUgDbvDjFQtfgM0abglz7Kw8hx3LnWZ%2BNWUG1kygWj851YOjpR6H5B5P%2FkXTXcpbE53wu085nyhaXZ3UWv9PbmYadMFRJp6h8Zspc3eoKyiq&X-Amz-Signature=f9369480d58d32d528f44884a2dbdcdbee568441070f5359af26b39f2e46cd02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

