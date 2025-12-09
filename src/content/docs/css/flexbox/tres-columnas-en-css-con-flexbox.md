---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33LCXQ2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCvV3HetKfNBEO9RZlqxRs72pa1nlF%2FhXsxJ5rgeiayAIgYS8vLO9F31HiJH0cE6nz5EI2EWLXaKNG5Bw4vSozTX4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLr67LS1ghytoorGeyrcA6f3AnxwS2ZZUlRm3Ih6GekvkWdDs1w78jA%2FMXxcqprxjj7%2Fbq5eG2LNL8%2BFc1Zzobht3PIQCa%2FlQjm2KuQj6WNP6%2FyWIZmisJMI6ZT6eGJZeEETF6mC3GVc9Qp8R758%2FEEHWoIba3HYD3p%2FYV4HvgtT24m4vuwPryg38gRBTrVcKnUcbVYLV5UA4XMIr3alSxILw785D8v4i3roVcEzdVfuqVAMuzI7XVh2owGA05MweSp%2FS%2BlbEbIWwtBPf%2FkcWB2uY3X6IL224t%2BuLKxF7tkIqXh2rcavThlegCvz%2FfI%2BKD36JCSsjsLVeadCRBucofrgkM%2FCY9h6PAm5Y2zTTNXN30UPvVtnxsqOXTWPDIGDhVWoLqEVWsVMKhSjdfp%2FfP%2FinVrcxYhtNWsSDZ68C3OrcCKSk044uFnn33EbAKLM0J9kQMKwo2IuIpD%2F9SMm3JpbtzxH9nr2ZRfe%2Ffy6UK3WXdBNHqudrMDeJvhEirHGIS3RRyP6LgvnNsAeluqUE70CJSaTXAD11uGNHSHSri6UcmeotSYVSRyu7yd%2FxwNYD24M9nF7M%2BrRTsUAq26Hi6k%2FkAjjHjZVEJZM2Ao6e3JIhKsGxbBBBHPbtHTCr3UhOMTMRoMVtnuY9zzuMJuI38kGOqUBytnWhQWvrmw%2FXGj03iw%2F78puvqCO5Mlcb9L%2Fra7krxmmz3lODw5QF%2FVFt0rl3bfGUADSNqyU%2B2NspuAoAuYc68m6iBf70vBt6jn4404KPQZ2e0vfxKYOOv8YQMDFPUDgnQLkFMid9uGO9doaS3Sv8i9dCUpgDajnnfo5p6tuE0i0nPPG0hi%2Fu3rppP1vnqdezuvLcgOq8Ohl458KtOgco%2BL7GNSA&X-Amz-Signature=05219d4df189e8f73e2f6d58e8ced815f5fe699009108addc857ea0b0f394fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33LCXQ2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCvV3HetKfNBEO9RZlqxRs72pa1nlF%2FhXsxJ5rgeiayAIgYS8vLO9F31HiJH0cE6nz5EI2EWLXaKNG5Bw4vSozTX4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLr67LS1ghytoorGeyrcA6f3AnxwS2ZZUlRm3Ih6GekvkWdDs1w78jA%2FMXxcqprxjj7%2Fbq5eG2LNL8%2BFc1Zzobht3PIQCa%2FlQjm2KuQj6WNP6%2FyWIZmisJMI6ZT6eGJZeEETF6mC3GVc9Qp8R758%2FEEHWoIba3HYD3p%2FYV4HvgtT24m4vuwPryg38gRBTrVcKnUcbVYLV5UA4XMIr3alSxILw785D8v4i3roVcEzdVfuqVAMuzI7XVh2owGA05MweSp%2FS%2BlbEbIWwtBPf%2FkcWB2uY3X6IL224t%2BuLKxF7tkIqXh2rcavThlegCvz%2FfI%2BKD36JCSsjsLVeadCRBucofrgkM%2FCY9h6PAm5Y2zTTNXN30UPvVtnxsqOXTWPDIGDhVWoLqEVWsVMKhSjdfp%2FfP%2FinVrcxYhtNWsSDZ68C3OrcCKSk044uFnn33EbAKLM0J9kQMKwo2IuIpD%2F9SMm3JpbtzxH9nr2ZRfe%2Ffy6UK3WXdBNHqudrMDeJvhEirHGIS3RRyP6LgvnNsAeluqUE70CJSaTXAD11uGNHSHSri6UcmeotSYVSRyu7yd%2FxwNYD24M9nF7M%2BrRTsUAq26Hi6k%2FkAjjHjZVEJZM2Ao6e3JIhKsGxbBBBHPbtHTCr3UhOMTMRoMVtnuY9zzuMJuI38kGOqUBytnWhQWvrmw%2FXGj03iw%2F78puvqCO5Mlcb9L%2Fra7krxmmz3lODw5QF%2FVFt0rl3bfGUADSNqyU%2B2NspuAoAuYc68m6iBf70vBt6jn4404KPQZ2e0vfxKYOOv8YQMDFPUDgnQLkFMid9uGO9doaS3Sv8i9dCUpgDajnnfo5p6tuE0i0nPPG0hi%2Fu3rppP1vnqdezuvLcgOq8Ohl458KtOgco%2BL7GNSA&X-Amz-Signature=051bd8862e06d61a78bcd21a4319f0481db408e01ee3affabcc0d29d8b2e84b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

