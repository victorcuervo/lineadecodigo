---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D3B4THO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZz6mfUmrfPt5%2FsKHYR8HIWMood%2B8fVRlEsNhcHq9SZAiARoCAwvRxMwjm7nd5nrV3BsjlEFEs%2Fx3yNmiB9nygX%2BCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO2td293F09%2FRWAXNKtwDqjSOtYqigPZPoSuj6HYVVIlY787HtAcHXnHNKzVCosSK4AjwNh3Rldmhn9cqZnDW0%2BYiEVnbohdjw3bTF3GojkB%2BCTI1qY%2BSiBjTEc7ltxok21UhoRPWF5uAzW%2BTMFPkE2QEeH2itsVroP%2BSF9LX6RXBtEKRqm60FEzWt%2BxaAUPxYHm4uK2PzgWq0OrrAoZgFX8mTZe6DmYeyLeq%2F9KwXB28dEBnFf4Jaq%2FlIZq0POmF%2B3spKjCfcqh8E9lMy6sDMURKLPGolY5F1o2JWAP1TioKJaSsvHigfDBHP1Phgya5KOp4G4aKLijhuwO8uFPvRNl3d2S5D3g%2FIa4iDIxtqvI4uP9ZRmHJk2ChiQD%2FYGBIt8CIwA76gmooo5It6kyKxcXTn83qJ15ZgvL%2FeU9fAGF3Oou9UKLjkV6c4yoddKhISuwhU%2BmOcNll4JL821kn61IggAsxKV0EogXXEOxruv3VoatJ4I2C0BQsWmYU0zrFR7l%2BJdf%2BxmuRo3fgtpIY0AzgbUiYMyCiSBCaKa3gn5ZsEaDjCjLa8Yxm9sXEVD5rt29My0SYe5W6wkXw2re%2BM%2FdS%2Bm1guhgLZyewkRoYLZjIog%2Bl8xj648Ab2mzjetNPEGfGoaWjKp%2BPbMIw%2BPLayQY6pgH49gHr4VivjNXxWE7sxJescHNrzAHv65zX9v4ZOKSJiUZbHXrvF3uSdQb7jGBXTlH%2FGGSpuf%2FT7cVziPkNhIdO0uAPwDusYDUWpMKrAHwrngFGMIVBJ59gOsyahm7fEQ8cyUvqxZqwK2odli5sNq3QIpriagX4B6SeKa%2Bjof91YgL7ib7LfSyT0GsrCVOY%2FjcADvJPOR%2Fd4NX5yVkXvr%2B3qf80XzT%2F&X-Amz-Signature=73a8ea94ca39d9ce1d880bbb3b7d9bcf8f393c515d4f957a1ea9e3878c02ba7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D3B4THO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZz6mfUmrfPt5%2FsKHYR8HIWMood%2B8fVRlEsNhcHq9SZAiARoCAwvRxMwjm7nd5nrV3BsjlEFEs%2Fx3yNmiB9nygX%2BCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO2td293F09%2FRWAXNKtwDqjSOtYqigPZPoSuj6HYVVIlY787HtAcHXnHNKzVCosSK4AjwNh3Rldmhn9cqZnDW0%2BYiEVnbohdjw3bTF3GojkB%2BCTI1qY%2BSiBjTEc7ltxok21UhoRPWF5uAzW%2BTMFPkE2QEeH2itsVroP%2BSF9LX6RXBtEKRqm60FEzWt%2BxaAUPxYHm4uK2PzgWq0OrrAoZgFX8mTZe6DmYeyLeq%2F9KwXB28dEBnFf4Jaq%2FlIZq0POmF%2B3spKjCfcqh8E9lMy6sDMURKLPGolY5F1o2JWAP1TioKJaSsvHigfDBHP1Phgya5KOp4G4aKLijhuwO8uFPvRNl3d2S5D3g%2FIa4iDIxtqvI4uP9ZRmHJk2ChiQD%2FYGBIt8CIwA76gmooo5It6kyKxcXTn83qJ15ZgvL%2FeU9fAGF3Oou9UKLjkV6c4yoddKhISuwhU%2BmOcNll4JL821kn61IggAsxKV0EogXXEOxruv3VoatJ4I2C0BQsWmYU0zrFR7l%2BJdf%2BxmuRo3fgtpIY0AzgbUiYMyCiSBCaKa3gn5ZsEaDjCjLa8Yxm9sXEVD5rt29My0SYe5W6wkXw2re%2BM%2FdS%2Bm1guhgLZyewkRoYLZjIog%2Bl8xj648Ab2mzjetNPEGfGoaWjKp%2BPbMIw%2BPLayQY6pgH49gHr4VivjNXxWE7sxJescHNrzAHv65zX9v4ZOKSJiUZbHXrvF3uSdQb7jGBXTlH%2FGGSpuf%2FT7cVziPkNhIdO0uAPwDusYDUWpMKrAHwrngFGMIVBJ59gOsyahm7fEQ8cyUvqxZqwK2odli5sNq3QIpriagX4B6SeKa%2Bjof91YgL7ib7LfSyT0GsrCVOY%2FjcADvJPOR%2Fd4NX5yVkXvr%2B3qf80XzT%2F&X-Amz-Signature=0d54d6a3e68ac5319672d8ce9d03553913113c95dc3d5a0bca7242155514627d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

