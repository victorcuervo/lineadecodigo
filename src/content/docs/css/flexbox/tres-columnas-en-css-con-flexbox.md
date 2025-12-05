---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGWJJBD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BRUZD%2F1PdQZkGcljRXPSBDF0eas3otHvXexuoH%2F16ewIgS9ZopVrddFqbcxDF9Sp8XyOIRSqDZPQfe23%2B%2FRVfphAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDHzUpUu3Xkvur3k%2BrSrcA2TVgE2qt5Ehd52lGGGbch6ek2JHBSwQ6CcgsK3K5qCt%2FUU5vTurdb%2Bol%2BabTi2KaL0L91BC0FckaV2qNR6VbtvYO%2FfjI%2BAtMHWUHbetQ%2BY56m%2BlknKxJNSr139N%2Fv96mMDro3Tu3ykIS9eizcX8y2y6K338G1bE1h%2FQcm%2FudIhjDlnr0gjDPYApP6oZYYT6bue7iL7S7NtKZ2xrcreSXuh6rxkVrklARgW4SbisdnT9msWKA%2FW7tIMi7DCXcYTkUSfkkKOKlONxzbnHMUtkak7Bp7RPQ%2Blg1CHVibsl44To9VyeNJlmRPBqAJwHCwaIPDxFDTnNmMaIQ%2BFvLcaYQRLi2kECc8csc0%2FlJQiMptQIQpl6rgXEFgUZLwdC75boY0iYLKpNORq03FGjVC7Qq67xROwHs1zObC8OnsaT9mnsaIkrCE3qW59e%2BgImdFLZBtRrxpHi2PRppG0jD1ueoQfqCI3QQadSuVY307c%2BB%2FuJTZvv1BABzgv9RQQbVx4iTAbvtw7KY4SiVyoYLPfd63Ks1%2Bp91z3h6%2FYN9pS8c%2F1Bz4f7zHlFbnq%2B05u%2BzvhdLqMzIRbXlgf4lnxErIYPhJCsd0oa5Wn04ox9QRvtH8Rw1aSxt0ztQG4CCP%2BvMNfly8kGOqUBFrDA5BdfcwdPU%2BYkE6PlMfRxcGtzsiWUnztzm%2BfZrxMjDNKZUVca9FEXE7wOZw8VIy9N9j0xdTwwrqtiLYsGMzNtyhsDkVYxlMO9gNN6DeZAvuabVcpCZYODue5%2FD3DLDn5GlJVy4a2JSrE0x5EcEoBsPEKszoatadWOr%2BXYEzfdhdc8nrXUy9%2FtPuzviuLTLneiPOQQRzCFZCObNJF39dzDkJJt&X-Amz-Signature=0c65616c22f7a2a57be6a04303b2e62cd71dfab418e8772f2b71eb993dc47f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGWJJBD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BRUZD%2F1PdQZkGcljRXPSBDF0eas3otHvXexuoH%2F16ewIgS9ZopVrddFqbcxDF9Sp8XyOIRSqDZPQfe23%2B%2FRVfphAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDHzUpUu3Xkvur3k%2BrSrcA2TVgE2qt5Ehd52lGGGbch6ek2JHBSwQ6CcgsK3K5qCt%2FUU5vTurdb%2Bol%2BabTi2KaL0L91BC0FckaV2qNR6VbtvYO%2FfjI%2BAtMHWUHbetQ%2BY56m%2BlknKxJNSr139N%2Fv96mMDro3Tu3ykIS9eizcX8y2y6K338G1bE1h%2FQcm%2FudIhjDlnr0gjDPYApP6oZYYT6bue7iL7S7NtKZ2xrcreSXuh6rxkVrklARgW4SbisdnT9msWKA%2FW7tIMi7DCXcYTkUSfkkKOKlONxzbnHMUtkak7Bp7RPQ%2Blg1CHVibsl44To9VyeNJlmRPBqAJwHCwaIPDxFDTnNmMaIQ%2BFvLcaYQRLi2kECc8csc0%2FlJQiMptQIQpl6rgXEFgUZLwdC75boY0iYLKpNORq03FGjVC7Qq67xROwHs1zObC8OnsaT9mnsaIkrCE3qW59e%2BgImdFLZBtRrxpHi2PRppG0jD1ueoQfqCI3QQadSuVY307c%2BB%2FuJTZvv1BABzgv9RQQbVx4iTAbvtw7KY4SiVyoYLPfd63Ks1%2Bp91z3h6%2FYN9pS8c%2F1Bz4f7zHlFbnq%2B05u%2BzvhdLqMzIRbXlgf4lnxErIYPhJCsd0oa5Wn04ox9QRvtH8Rw1aSxt0ztQG4CCP%2BvMNfly8kGOqUBFrDA5BdfcwdPU%2BYkE6PlMfRxcGtzsiWUnztzm%2BfZrxMjDNKZUVca9FEXE7wOZw8VIy9N9j0xdTwwrqtiLYsGMzNtyhsDkVYxlMO9gNN6DeZAvuabVcpCZYODue5%2FD3DLDn5GlJVy4a2JSrE0x5EcEoBsPEKszoatadWOr%2BXYEzfdhdc8nrXUy9%2FtPuzviuLTLneiPOQQRzCFZCObNJF39dzDkJJt&X-Amz-Signature=533b10a2c844731f8ce277534218432aa33df2a91847e1dc9c291e8a3414ba58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

