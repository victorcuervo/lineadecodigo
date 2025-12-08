---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5VYSNZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKqyN2zMb54kDSSeytCNzQ%2BAEjgaTtho%2BH10ImrfscBgIhAOFx8XX14lSq6kSizZ%2Bt8JqD89DtPYH53aSJA7gbTaMXKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy08l%2Ftzo3IrjIK0wMq3AMjmmdlPzh3VFX0bAUk74xFnOjnCo9%2BzdNtqfjjuHI3d1vRz5nOyHh3P9GtkOzItG5VuU1w2cbXvkhbIi6b7qAP%2F4pIq1d9wsenVtCw31PyPhcLP2LkXvAsW51HCuQqN6o9lsXNy9NuFGxYaMeZOG%2F9xezraER8rX%2FhtfOo2l8iMLjEdUFWgTh9g9rNXZF81Mdi%2FHIgi8YpQax22MHGwA2gyVseH0YyKvrc%2FnNEa6sKqhOLb4AdA1LAgt1WWm013fpLPj9NospN8neRMIANk6Zr6pNJLE2R26HNDYsxiBFNAJR3viMSSB2YEy7zZ2Bq3ZESF%2Bscgi3SiNDIHgVmIN8xL8qFjiTZs7v0YZcIozf8o%2BGEB3llb%2BgvOx1zLTCbm1NhJZEK3dcT1aOPuat0XPONs%2FEoh%2FcPxr8ciG3T%2BiizmffCKBtAjValb6jhBCzuy5RnT%2FH8Qm1V0NkQ%2FKQXMUCyiV8HhN8oX3%2B0WaZfSCapDg4HmfvfOZbpnpiyMGogD%2FBsu1on5iOSyTR%2BFjd3r%2FM57%2B5osuSxSF33vhthlXaKmy%2Bjf%2FjZllrP7BeX6rgcSKTdHL7cI6uXxKIkugDIamq1I2PNXEmaGzc%2ByPIuOmPfIDg37gZJ1Yfb4i9fDjDYodjJBjqkAWXaGmBbRbeLtPVIXT4zoAu9bc8KFkdylicB0wy9FntMijF%2FRZrjjk%2BTr5%2F4EynXoxZ2thJ3S2x041lTc2%2FhusnT9PNdccn8Agx3zjZu9Fmv7AtIkuCbKUs7Llm6Hoj%2F%2F9WXVt%2F8MovYM1JXXvgnbv6ctntm1ZnjGw%2FeLwiY66EKEFhUJW2HEP00b%2Bn%2BNU%2FrajmVx5nGwiHn%2BpBv9xA4KBeZod0e&X-Amz-Signature=af69ec29c7df52a76b1668bb43a45b40892a0e9484dcc3dfc82236e2a9050bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5VYSNZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKqyN2zMb54kDSSeytCNzQ%2BAEjgaTtho%2BH10ImrfscBgIhAOFx8XX14lSq6kSizZ%2Bt8JqD89DtPYH53aSJA7gbTaMXKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy08l%2Ftzo3IrjIK0wMq3AMjmmdlPzh3VFX0bAUk74xFnOjnCo9%2BzdNtqfjjuHI3d1vRz5nOyHh3P9GtkOzItG5VuU1w2cbXvkhbIi6b7qAP%2F4pIq1d9wsenVtCw31PyPhcLP2LkXvAsW51HCuQqN6o9lsXNy9NuFGxYaMeZOG%2F9xezraER8rX%2FhtfOo2l8iMLjEdUFWgTh9g9rNXZF81Mdi%2FHIgi8YpQax22MHGwA2gyVseH0YyKvrc%2FnNEa6sKqhOLb4AdA1LAgt1WWm013fpLPj9NospN8neRMIANk6Zr6pNJLE2R26HNDYsxiBFNAJR3viMSSB2YEy7zZ2Bq3ZESF%2Bscgi3SiNDIHgVmIN8xL8qFjiTZs7v0YZcIozf8o%2BGEB3llb%2BgvOx1zLTCbm1NhJZEK3dcT1aOPuat0XPONs%2FEoh%2FcPxr8ciG3T%2BiizmffCKBtAjValb6jhBCzuy5RnT%2FH8Qm1V0NkQ%2FKQXMUCyiV8HhN8oX3%2B0WaZfSCapDg4HmfvfOZbpnpiyMGogD%2FBsu1on5iOSyTR%2BFjd3r%2FM57%2B5osuSxSF33vhthlXaKmy%2Bjf%2FjZllrP7BeX6rgcSKTdHL7cI6uXxKIkugDIamq1I2PNXEmaGzc%2ByPIuOmPfIDg37gZJ1Yfb4i9fDjDYodjJBjqkAWXaGmBbRbeLtPVIXT4zoAu9bc8KFkdylicB0wy9FntMijF%2FRZrjjk%2BTr5%2F4EynXoxZ2thJ3S2x041lTc2%2FhusnT9PNdccn8Agx3zjZu9Fmv7AtIkuCbKUs7Llm6Hoj%2F%2F9WXVt%2F8MovYM1JXXvgnbv6ctntm1ZnjGw%2FeLwiY66EKEFhUJW2HEP00b%2Bn%2BNU%2FrajmVx5nGwiHn%2BpBv9xA4KBeZod0e&X-Amz-Signature=41216f68321a6c8686f9a8a98266ee2099ae9da7b58af94e3aeaec3a7052e049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

