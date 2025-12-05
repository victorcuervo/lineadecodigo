---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL45ADLB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCzIrLVI0l2y4CE5jaVyfM735p1%2FjGMUvSeokAaoCwg%2BAIfNvmkJCVslMtcYHjQe8otLLyle9uJNatI2lTEPNGTNCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMBrXvON6A2uTDL6RDKtwDHd%2F0uCHraIn6KEMKt981ozN1bHqmzZAnfJj5%2FPiIJ%2FehAGC%2BTgIJP%2BD3yuYoGNAPXMzfF8N9mDzVpjs5ebDnTEtImXc%2FrlqdDroBstYCdm31p%2BFdM91yIuHn%2BzjNb3ye7WTJJQCnp4F6YLNnqRroCsAa4n%2FYWvuEYRYlRnD20IXoZQhlJIe4%2FDx7rWQoCRcmPyOELgDJZQO%2BvGvGTvVqjnWn%2By1nZUE8VzXkMjAXReKMxxn1cm3LjRPUatzTBjTcEDROt7X01kYaIWgs%2BLX6TjxCTrKINF7rs%2F3APxomDpWS5MOxOmyHirQu%2FjbBwOGzp3MIOYEQvvOKKhF5hVJ%2BDQ%2B9%2FIRjd%2BPrPOsbUuZ7JKag1lWwaRvsHB0Rg2k5gpFOleMfMlVZmkiHF86%2BfrnED441inQIGndIE8Nx42EpRV4bcPFQO6S0W2IlQ8p%2BSv0IcEQi0CDRwvldhc9GhHZl%2FWUZA3XbNlZsezE7aXamAYCJLzncM6Zo8wRRdC%2B03uBoK12927hheWPydGf%2Fd59SaUWGdI%2FrwYHSx7NQPYrD9k5u9fCMcpV2%2FAUcTfZhY9eK2vbMBcVH5FWsbE9QGHfNU0PvErAoMTTL6PpDm%2FUp%2BXmH5r32l5LYHflgyaAwtqzJyQY6pgHbHF5RHXBOw2anqXUA9%2Bsd9b5phmoeHIQcWqhMRbxuMfs9L5ZIpZst%2FIGPo0uNQLkFw5IAKTov0Dm%2F2CjSqG8Ii2xQ4x6YH9Nid%2Bakw%2B8cgW1QFoJxScgOBc3ueV%2BE%2BSdFWLsmYo8aGLwGupruXBLcM%2FdyoYlN2JqzlHoV4g5lNQ77yfayi0VXHMEbo5sHM%2F78JWS%2FZX5cdC4Aep0idhHKOoDCAS3K&X-Amz-Signature=9bf2e6dbbe4e094b9d1c6040056ba493af1a30aec28b7f9415811cb3442574f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL45ADLB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCzIrLVI0l2y4CE5jaVyfM735p1%2FjGMUvSeokAaoCwg%2BAIfNvmkJCVslMtcYHjQe8otLLyle9uJNatI2lTEPNGTNCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMBrXvON6A2uTDL6RDKtwDHd%2F0uCHraIn6KEMKt981ozN1bHqmzZAnfJj5%2FPiIJ%2FehAGC%2BTgIJP%2BD3yuYoGNAPXMzfF8N9mDzVpjs5ebDnTEtImXc%2FrlqdDroBstYCdm31p%2BFdM91yIuHn%2BzjNb3ye7WTJJQCnp4F6YLNnqRroCsAa4n%2FYWvuEYRYlRnD20IXoZQhlJIe4%2FDx7rWQoCRcmPyOELgDJZQO%2BvGvGTvVqjnWn%2By1nZUE8VzXkMjAXReKMxxn1cm3LjRPUatzTBjTcEDROt7X01kYaIWgs%2BLX6TjxCTrKINF7rs%2F3APxomDpWS5MOxOmyHirQu%2FjbBwOGzp3MIOYEQvvOKKhF5hVJ%2BDQ%2B9%2FIRjd%2BPrPOsbUuZ7JKag1lWwaRvsHB0Rg2k5gpFOleMfMlVZmkiHF86%2BfrnED441inQIGndIE8Nx42EpRV4bcPFQO6S0W2IlQ8p%2BSv0IcEQi0CDRwvldhc9GhHZl%2FWUZA3XbNlZsezE7aXamAYCJLzncM6Zo8wRRdC%2B03uBoK12927hheWPydGf%2Fd59SaUWGdI%2FrwYHSx7NQPYrD9k5u9fCMcpV2%2FAUcTfZhY9eK2vbMBcVH5FWsbE9QGHfNU0PvErAoMTTL6PpDm%2FUp%2BXmH5r32l5LYHflgyaAwtqzJyQY6pgHbHF5RHXBOw2anqXUA9%2Bsd9b5phmoeHIQcWqhMRbxuMfs9L5ZIpZst%2FIGPo0uNQLkFw5IAKTov0Dm%2F2CjSqG8Ii2xQ4x6YH9Nid%2Bakw%2B8cgW1QFoJxScgOBc3ueV%2BE%2BSdFWLsmYo8aGLwGupruXBLcM%2FdyoYlN2JqzlHoV4g5lNQ77yfayi0VXHMEbo5sHM%2F78JWS%2FZX5cdC4Aep0idhHKOoDCAS3K&X-Amz-Signature=2963be881d7a1531be223a5ac863cd53756e6cfed2bbbf5fbe61a00739302d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

