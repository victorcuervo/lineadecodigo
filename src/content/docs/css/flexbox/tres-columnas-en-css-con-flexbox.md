---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROULXNXR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBn3dSFXJ2XyyrjhMQRM4OqdLUSxab4vOGEc6nCXDG3%2FAiAMFktk6fQ%2FnkgdtB3bKnQMiY8KR4L3KZNF3kkE8jpjFSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsy7qy9qfBKjFmvipKtwDuwlg3Kj7WoRzufM7Zxn74U%2B%2FK8vsZzScl7qc0ggAy0fDe5M0VTlbWYUftm1ukXejtylKqQ6guuzcxEYUjAl84OYxDnz%2BCUKsrhRu%2FR0u9A9AsHwP0UdNXmEbwVZVxWrFVpOnkc6AtXXuTnCuKnF5W7rjR1tQHK0jG%2BmmtKbf6nyswd%2FK%2B2BVVdMtaPyxJjGpb42o4zIjVAjZ5%2BiZHC6xxsTIr9Lw%2BAUyTy1dwKzWVY%2BBCTqfECLAgOQhgowj3Ny60P2TFmGlATtD0uFIR3IsoSZ0Bub3RdD5JKKalvebVaoeGiTVgoIfffzEQVwYBOGxRfBQA97NFmzMxKlrhghUCFnSksWZWheAF6vBjxSqi2jMznG9hnPfvZuDDfsFxATV86QAt%2BZLAJtFnU2SJ6ckNkEEtKI01YcRddX9mFAnmMev1atwJOBFW5HTSIWPBrV8E40rnRfQOQnbdJoNOViLxZXGQnts3igHCljkcwZGAkJHJbz6TgidQEW2gyCrkdbwB5TGhJmFt0gyTCn696rXgQ9gsaaIbM3jq%2BTs5pLmaWOycDn1S%2B7MnWRguajEAktbG1M6awapUF%2BZZa2qs0dBYv%2BluKbQ0x3%2Feu6qkaBcMKN38Oj3sA2lDOXMPJswhaLUyQY6pgHTC549pOhfTsAi8eX3hJfyNYZr8kk13kb6ueG%2BmP4Afk%2FQxN25BjPL4KoQav9ilkDdtVgLlc0H7b5fPlmDrCxIZPkkRR%2BZBGrv%2BIxK7BU6n6oIih30TYVWSp9XcBZVQ9Fk%2B%2BUXzHwjOKMDqTgEDOIDlUpmqgsZso9Qg%2FgF4x5rpIydiwYWixVOzcwGmY5tz6NXOEQX17kylQGzKH%2FdEKmUybljlaCS&X-Amz-Signature=01f457bef8dac4cc51068f788522fbc18e828f47ed7311c280d5c321ac3f5fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROULXNXR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBn3dSFXJ2XyyrjhMQRM4OqdLUSxab4vOGEc6nCXDG3%2FAiAMFktk6fQ%2FnkgdtB3bKnQMiY8KR4L3KZNF3kkE8jpjFSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsy7qy9qfBKjFmvipKtwDuwlg3Kj7WoRzufM7Zxn74U%2B%2FK8vsZzScl7qc0ggAy0fDe5M0VTlbWYUftm1ukXejtylKqQ6guuzcxEYUjAl84OYxDnz%2BCUKsrhRu%2FR0u9A9AsHwP0UdNXmEbwVZVxWrFVpOnkc6AtXXuTnCuKnF5W7rjR1tQHK0jG%2BmmtKbf6nyswd%2FK%2B2BVVdMtaPyxJjGpb42o4zIjVAjZ5%2BiZHC6xxsTIr9Lw%2BAUyTy1dwKzWVY%2BBCTqfECLAgOQhgowj3Ny60P2TFmGlATtD0uFIR3IsoSZ0Bub3RdD5JKKalvebVaoeGiTVgoIfffzEQVwYBOGxRfBQA97NFmzMxKlrhghUCFnSksWZWheAF6vBjxSqi2jMznG9hnPfvZuDDfsFxATV86QAt%2BZLAJtFnU2SJ6ckNkEEtKI01YcRddX9mFAnmMev1atwJOBFW5HTSIWPBrV8E40rnRfQOQnbdJoNOViLxZXGQnts3igHCljkcwZGAkJHJbz6TgidQEW2gyCrkdbwB5TGhJmFt0gyTCn696rXgQ9gsaaIbM3jq%2BTs5pLmaWOycDn1S%2B7MnWRguajEAktbG1M6awapUF%2BZZa2qs0dBYv%2BluKbQ0x3%2Feu6qkaBcMKN38Oj3sA2lDOXMPJswhaLUyQY6pgHTC549pOhfTsAi8eX3hJfyNYZr8kk13kb6ueG%2BmP4Afk%2FQxN25BjPL4KoQav9ilkDdtVgLlc0H7b5fPlmDrCxIZPkkRR%2BZBGrv%2BIxK7BU6n6oIih30TYVWSp9XcBZVQ9Fk%2B%2BUXzHwjOKMDqTgEDOIDlUpmqgsZso9Qg%2FgF4x5rpIydiwYWixVOzcwGmY5tz6NXOEQX17kylQGzKH%2FdEKmUybljlaCS&X-Amz-Signature=3923f29e3b7a3faf6a4ea3618eed0d4db5b5b657bab6a22331e6301f85b742bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

