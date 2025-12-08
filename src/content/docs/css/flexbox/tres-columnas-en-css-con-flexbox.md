---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTIAX3V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXbg4VeYGGPM5EuZW%2FW7Mx9iQNF5enbWQgjmoceFpb2AiAKHTwQ2AKnc3LdFNwh0469VR2tj3IkJlSJYgixdhlmbiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmlfi1E1B%2BtNjUcRRKtwDqOgiitTOGHFhQ8Ez4uDkXKriy6wEFbd%2F1%2BlARSqnCawS98LUeac8E73Khh0lRZaissTtCkOeOj9wVnaLEMDD6sPZMDyl4wtXn0eEmV9F7J9YTwaLMWGxVCI8IPRTtLAUK1DBZLvmWCOcG0p%2BsJZo5CuhA8UxroEl5SHXgjKrivhvjmFRu9TmKewJ39pcQazAhYyfh%2FVQjQNFjiHSFUPK%2BE8rNlIHjg5%2FqrWPdWaVvnshLJ1SpKlx8mfa%2FZrjV0U5VHyZ0A5Ha4FU0UL5XbQRaZ0Ka0GBCdDcSXB7cGC3TagoHdr0Zrng7bErRzTQO2q0mzAzdsNRV3%2FwJOf8JS%2FI5H6EzWQC6c4%2FdpRAKLW7BIlHoVhBJKtoP%2FCnbwyWnl%2F6IxzafDWDwYwwspW0%2BHJ6dYGPx0ZN5pVmlGJj8a6uZM%2FiWQxmHgF5F1a1oD%2Fx5VgtjlDNVhJkA7A3Of%2FWufS0Fvlg0%2FyKGnsyEBNPjKH20OaSdKCND3PGZ%2BMpcQKdm65MgdRm4hcJ0g6903%2FcvxRa1liPzSLR9WqlEVpb1UPojr4NWcmMZoJZ1s3TU%2Fo1E05EVRklQ8QR0Awdc4n4Vsl7E9m87sw5%2Bu7NwvoVkLRck7vOTte28l%2Fpz0BfU9Aw05TZyQY6pgFWPTrQycIm24Q9v%2BJg288QV%2FOkFFj2GXFlp%2FRTeMTtUQJpufQC35gB%2BjWhCfAXuOzmZDNHrWnsFkyNURIEMvbizsfYQzwB7kU%2F%2FA1UK%2BoevdsGifMba9bJS6AkbS5yBSAoHHRmrN%2BL7b7HfsOqdfs4hhV4in6Wabs6BUknoplvZ9rHvLUjUhSYm5lv8e8GGnF%2BTnWzbpEjTlXrN7ljJOhtUdyLLidc&X-Amz-Signature=7c41ae63ffb8b4dc7e105f1c49eb14dc6a9d51411872beaa629c657046bc5569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTIAX3V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXbg4VeYGGPM5EuZW%2FW7Mx9iQNF5enbWQgjmoceFpb2AiAKHTwQ2AKnc3LdFNwh0469VR2tj3IkJlSJYgixdhlmbiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmlfi1E1B%2BtNjUcRRKtwDqOgiitTOGHFhQ8Ez4uDkXKriy6wEFbd%2F1%2BlARSqnCawS98LUeac8E73Khh0lRZaissTtCkOeOj9wVnaLEMDD6sPZMDyl4wtXn0eEmV9F7J9YTwaLMWGxVCI8IPRTtLAUK1DBZLvmWCOcG0p%2BsJZo5CuhA8UxroEl5SHXgjKrivhvjmFRu9TmKewJ39pcQazAhYyfh%2FVQjQNFjiHSFUPK%2BE8rNlIHjg5%2FqrWPdWaVvnshLJ1SpKlx8mfa%2FZrjV0U5VHyZ0A5Ha4FU0UL5XbQRaZ0Ka0GBCdDcSXB7cGC3TagoHdr0Zrng7bErRzTQO2q0mzAzdsNRV3%2FwJOf8JS%2FI5H6EzWQC6c4%2FdpRAKLW7BIlHoVhBJKtoP%2FCnbwyWnl%2F6IxzafDWDwYwwspW0%2BHJ6dYGPx0ZN5pVmlGJj8a6uZM%2FiWQxmHgF5F1a1oD%2Fx5VgtjlDNVhJkA7A3Of%2FWufS0Fvlg0%2FyKGnsyEBNPjKH20OaSdKCND3PGZ%2BMpcQKdm65MgdRm4hcJ0g6903%2FcvxRa1liPzSLR9WqlEVpb1UPojr4NWcmMZoJZ1s3TU%2Fo1E05EVRklQ8QR0Awdc4n4Vsl7E9m87sw5%2Bu7NwvoVkLRck7vOTte28l%2Fpz0BfU9Aw05TZyQY6pgFWPTrQycIm24Q9v%2BJg288QV%2FOkFFj2GXFlp%2FRTeMTtUQJpufQC35gB%2BjWhCfAXuOzmZDNHrWnsFkyNURIEMvbizsfYQzwB7kU%2F%2FA1UK%2BoevdsGifMba9bJS6AkbS5yBSAoHHRmrN%2BL7b7HfsOqdfs4hhV4in6Wabs6BUknoplvZ9rHvLUjUhSYm5lv8e8GGnF%2BTnWzbpEjTlXrN7ljJOhtUdyLLidc&X-Amz-Signature=3b099c4f321f28cc7e038fe4478416edba5ce30add821f5944d1bd271c2058f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

