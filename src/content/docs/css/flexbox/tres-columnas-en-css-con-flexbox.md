---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZCCEGVZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIE5iRdyvvKunNPXlT2CwTwe%2F8PgCWX7lKEPYgH8akOTcAiBWR%2B3ghxHG6dFX%2FQjdq6pN%2F4ijMalG278RR6QtoBnlSyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMoqASivD2mvJ6NCKWKtwD6BIF1%2Bot4VfykKmycVFYwpRQLN%2B2bC5M4FCJqNGSrUMj0MFJEqt6he3WaEjRiklFPYsTMVVTDYz7q8rPVvYP4tTr%2Fx9dCw53ql%2BflvU%2F%2BL8Qc2cJ7Vi%2BgDwmaaVda%2BO6u5IzNdZiH5keBZBd6le4D8Q6kGJfjSMnhsR2Bryq%2BvpEmy8iQTY8eMxhFWbUgbC7cRxQbxeDWStqTa1lJBH%2B2W04FQ%2B8vp%2Fq55O%2B6tmX4ao2HOIjkJ5AtJbGxp5Kt3vt8XyqoFejwzDNFA0xFe00l5AH5JuQgv3tL2h%2BjKgWquBQv31aHx5tKEOew%2BUhmKT5mKxNx5xjvQgvHnJNDoMAD6nclf2nBz10CcX0O9qC7%2BCKoioHqVjSY6H%2F166qo9B1gMgG9TVV1YqdkC9QLMXuIdXL3zst0ZNeMAghjYXGf5QkACV8kciKYe0f2oYptYEO7od%2BPu1w1Xv4hXTEHX9ASYU11FKc9lSWLhz68CVR4iV1PkN2OiYSTL4%2F7wkm4fOjJ8Y0zFR%2BVqrqKuhGKyuuTdCS%2BRpNqamZPNea3mZdd8fXcP1oLSywTc%2FbmpLRwpaEqZQbRoq8vum1K0Y54cSJqIqM5WEUMGJpggDhRNoRiJblj2ss59Zk1lrqhRUw2ffCyQY6pgEIVqSHyTvLFN3FC2fe67Yw2oikKl1RoV0614xE1fFkNiYjLD85lOdojlk%2BdpsJJFnT6JOuU4YXx5rtdty8mKPcU%2BvKqSP%2B43EHUjGbmNZ7i0zleWTIcuNu3fEj0f8ONWQ4Jf%2BIirP%2BoGcA4bWFxtm4VKZ4AGdzo5Su3bsw5NMv16CnDK7TsieTPTenNgQjTBju9qBZzwChNaZIaRb5vfRcNaJMAlR8&X-Amz-Signature=ed410cf7e8bba0f95f68befac90dc28f4dec0ea907af2782a4d538aaa0fc55fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZCCEGVZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIE5iRdyvvKunNPXlT2CwTwe%2F8PgCWX7lKEPYgH8akOTcAiBWR%2B3ghxHG6dFX%2FQjdq6pN%2F4ijMalG278RR6QtoBnlSyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMoqASivD2mvJ6NCKWKtwD6BIF1%2Bot4VfykKmycVFYwpRQLN%2B2bC5M4FCJqNGSrUMj0MFJEqt6he3WaEjRiklFPYsTMVVTDYz7q8rPVvYP4tTr%2Fx9dCw53ql%2BflvU%2F%2BL8Qc2cJ7Vi%2BgDwmaaVda%2BO6u5IzNdZiH5keBZBd6le4D8Q6kGJfjSMnhsR2Bryq%2BvpEmy8iQTY8eMxhFWbUgbC7cRxQbxeDWStqTa1lJBH%2B2W04FQ%2B8vp%2Fq55O%2B6tmX4ao2HOIjkJ5AtJbGxp5Kt3vt8XyqoFejwzDNFA0xFe00l5AH5JuQgv3tL2h%2BjKgWquBQv31aHx5tKEOew%2BUhmKT5mKxNx5xjvQgvHnJNDoMAD6nclf2nBz10CcX0O9qC7%2BCKoioHqVjSY6H%2F166qo9B1gMgG9TVV1YqdkC9QLMXuIdXL3zst0ZNeMAghjYXGf5QkACV8kciKYe0f2oYptYEO7od%2BPu1w1Xv4hXTEHX9ASYU11FKc9lSWLhz68CVR4iV1PkN2OiYSTL4%2F7wkm4fOjJ8Y0zFR%2BVqrqKuhGKyuuTdCS%2BRpNqamZPNea3mZdd8fXcP1oLSywTc%2FbmpLRwpaEqZQbRoq8vum1K0Y54cSJqIqM5WEUMGJpggDhRNoRiJblj2ss59Zk1lrqhRUw2ffCyQY6pgEIVqSHyTvLFN3FC2fe67Yw2oikKl1RoV0614xE1fFkNiYjLD85lOdojlk%2BdpsJJFnT6JOuU4YXx5rtdty8mKPcU%2BvKqSP%2B43EHUjGbmNZ7i0zleWTIcuNu3fEj0f8ONWQ4Jf%2BIirP%2BoGcA4bWFxtm4VKZ4AGdzo5Su3bsw5NMv16CnDK7TsieTPTenNgQjTBju9qBZzwChNaZIaRb5vfRcNaJMAlR8&X-Amz-Signature=b17aaedc83ec5186bb4dc59f88f02489eac198ee1c0c12c4647d9e17a8c70154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

