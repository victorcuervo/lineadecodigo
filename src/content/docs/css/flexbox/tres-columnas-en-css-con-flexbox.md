---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCOFZXA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEouKMkWGN4DctZKrOKxYOS5E1ys7zA1LBnzEgU%2BMtvgIhAM8fjwlZh5v0W2IZ4cm7e%2BqlaLyYiMbGoJrKPqQIrdjsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGHKmH%2B0Cwtqpk1Kwq3ANPCaLn5usiAAu%2FMuKnxN7q0NKwooHxkMloEcJ5guso3aKCgsKd45D70%2F8mqi2Pam%2F2lu5O6zr0FrZCjD4Omn%2BRPW8zz9b0XXidc3dSfkQxQPACB7i1RCCwcc09fWPokaxQdfVbnCoyad6q7mf6UEQ2KUx8bRw%2B0qPuJG5y5ugvqsysirmqSN9OTPapSIRjwHdPPzgcZgaT%2FY8dC8e7BSYpkTxixqhhN9h%2BmbGqY61VsW0xQQZxBRRrdJmuiNqMJa%2Fi%2BJZTsaqyZlXDC%2BkNb1PPzrnK%2FWFuAT5eTLEhR%2FedyNMxhf%2FObebC8wIkRFKwG9otYsuYjFp2ev5KkuLOZWd3VDYDI65%2Bq2ysPA014ncvTeQsRCB9G%2F4gGryuUoqFmJ3PPsnfIBDzhoMjD%2BH1%2BNuK%2BDCZzdG1gSGXCAZbSCnva0HXkwhiEa15Pdk%2B6fXCvE74IFR%2B3g1t%2FddKDLFRXEdd0nu7Az0LY%2BfOMvuaEBoUInnpKLzg2nQfTGmyqgd8t1u%2BZ34%2Ftc0tzwrrVUcMLOHTIGDhBagB0EtlhFKh1xc%2Bqy88qhobVemHvaKBxj2L9hEi%2BD5IY7CxdLNBvGde75IEL%2Fp9eliOz%2BNYUyfUsXAEgRJ6p44UqfviVVnsmDCv%2FtLJBjqkAcNvbhL9KyB%2BZ14Yh2Khz52J93ma5ryEwSyuwaknY2CWLx%2Bpnc3T4bRuDyXVpYkUVa8YJjgIxL4BVSN8PKfxoxmIB11RwuSZWZXvj5eCAEdGzTJDDGig5rdm9rM4Q7gKrhU3BqmUmmE3ytvk6zn9YEWsrjgodM2xkLnKgQpcjypFJex4erDuo8heJ1uTLzdt4xTgzVcQ3NjCutW85Pb9mBActtSK&X-Amz-Signature=b65510dc95fe71c7b50b744fcb655647fa14373eac44878ef36bd94f542cf772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCOFZXA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEouKMkWGN4DctZKrOKxYOS5E1ys7zA1LBnzEgU%2BMtvgIhAM8fjwlZh5v0W2IZ4cm7e%2BqlaLyYiMbGoJrKPqQIrdjsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGHKmH%2B0Cwtqpk1Kwq3ANPCaLn5usiAAu%2FMuKnxN7q0NKwooHxkMloEcJ5guso3aKCgsKd45D70%2F8mqi2Pam%2F2lu5O6zr0FrZCjD4Omn%2BRPW8zz9b0XXidc3dSfkQxQPACB7i1RCCwcc09fWPokaxQdfVbnCoyad6q7mf6UEQ2KUx8bRw%2B0qPuJG5y5ugvqsysirmqSN9OTPapSIRjwHdPPzgcZgaT%2FY8dC8e7BSYpkTxixqhhN9h%2BmbGqY61VsW0xQQZxBRRrdJmuiNqMJa%2Fi%2BJZTsaqyZlXDC%2BkNb1PPzrnK%2FWFuAT5eTLEhR%2FedyNMxhf%2FObebC8wIkRFKwG9otYsuYjFp2ev5KkuLOZWd3VDYDI65%2Bq2ysPA014ncvTeQsRCB9G%2F4gGryuUoqFmJ3PPsnfIBDzhoMjD%2BH1%2BNuK%2BDCZzdG1gSGXCAZbSCnva0HXkwhiEa15Pdk%2B6fXCvE74IFR%2B3g1t%2FddKDLFRXEdd0nu7Az0LY%2BfOMvuaEBoUInnpKLzg2nQfTGmyqgd8t1u%2BZ34%2Ftc0tzwrrVUcMLOHTIGDhBagB0EtlhFKh1xc%2Bqy88qhobVemHvaKBxj2L9hEi%2BD5IY7CxdLNBvGde75IEL%2Fp9eliOz%2BNYUyfUsXAEgRJ6p44UqfviVVnsmDCv%2FtLJBjqkAcNvbhL9KyB%2BZ14Yh2Khz52J93ma5ryEwSyuwaknY2CWLx%2Bpnc3T4bRuDyXVpYkUVa8YJjgIxL4BVSN8PKfxoxmIB11RwuSZWZXvj5eCAEdGzTJDDGig5rdm9rM4Q7gKrhU3BqmUmmE3ytvk6zn9YEWsrjgodM2xkLnKgQpcjypFJex4erDuo8heJ1uTLzdt4xTgzVcQ3NjCutW85Pb9mBActtSK&X-Amz-Signature=d6f81cd71f0d58eb2b72016ae497340e290c9661ae3385accd95ba6e9836713f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

