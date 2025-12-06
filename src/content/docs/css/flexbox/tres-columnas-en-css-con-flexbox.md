---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5TTS42%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnCAnvn7T6BqLUQOmR1pzssKWenfgixSZUBmUpDxE4zAiEA6xWeidPwVZJr%2BgOdSoRugpvmmZPbBSD%2F%2BBYqtP%2BL1YUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKFDmXaflwH0DGdx5SrcAwaMAF2pWWuT8K2aPDHPDQoo2%2FppoX8Sbnfi1qXy77DZRxFtnTnX1At7JJzYvMRsmKTgq2AtZIZLX9Ccx6May6kEqvMLDdbLtU%2F3Vv8VQsLDVkeQGgLypKKGfNyYTJqwweq3Dhn8l6yIU5%2FKRt2x%2BCFZfN92%2B9lhASAbbTA%2B3f2op%2F5KDQujza0YmSO0KV0wAC2SJT3oWxs%2FCNzy2dk9DoBcIO4Pb7BF%2BYsHLcZstI57yR01Un3aWICYvDs2duo%2FeZBo5LFwrBKwlefaUw3Qsz4Wh%2FFWaihCBBA9fH9vuTIAw1ydg9ww%2FNGY0a63w7f0rC3zFqgY3Fe2R5ij9Vo%2BlfSX%2B6Gej95WzwiiUWjJbo3D6oNy90YEm8Cu2eKO%2BqiAfQL4JK1Bu3M5znCTnEuT30g7TIOvgQy1C%2Fe3wEhMlXbcQ1BecmNILZxT8PGI9gvS4M1wRS1RmCov1ClKVxqo5tDSC%2FHyCeisoY7anO5CUBXGvbEwDxB3HrRYPcxznisUBG9CezW1%2Bqu1xknmxISj2LFM8qtRQls2N1WrZ65jGJwZ4Q0rgoDet8VHT0BZotlgtG2PbXFiau%2FV1zun%2F8Q5nC%2Fq5PL7wEX9TbVljcy04cUWk3dyXd57WpfmGDS%2FMKGm0MkGOqUBLP%2BUceaBhXWtV1JDXx5PXKkfKPdXghUPe%2Fp5PPkYjZVpLmGiHkIRJhnTu3GeeZGWPBzM6HcEMIKPR6UTOBEu4Sml6yvZdNe4NxQ%2BaHliaLEo6MjI1ILzgHTJkiw9EUSvh%2F%2F%2BbXlcHQ%2BL3z8CMjM8A0LLSSHaMumKU80stsFJ5C6k0MYonSpIFVVP6LZDzZ7M6rF3PieliWy4WccSpmM16EQgJk9t&X-Amz-Signature=ef74a06fed3c14443009bdc0fbec61ac029572eb470e2380071f570b665f6a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5TTS42%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnCAnvn7T6BqLUQOmR1pzssKWenfgixSZUBmUpDxE4zAiEA6xWeidPwVZJr%2BgOdSoRugpvmmZPbBSD%2F%2BBYqtP%2BL1YUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKFDmXaflwH0DGdx5SrcAwaMAF2pWWuT8K2aPDHPDQoo2%2FppoX8Sbnfi1qXy77DZRxFtnTnX1At7JJzYvMRsmKTgq2AtZIZLX9Ccx6May6kEqvMLDdbLtU%2F3Vv8VQsLDVkeQGgLypKKGfNyYTJqwweq3Dhn8l6yIU5%2FKRt2x%2BCFZfN92%2B9lhASAbbTA%2B3f2op%2F5KDQujza0YmSO0KV0wAC2SJT3oWxs%2FCNzy2dk9DoBcIO4Pb7BF%2BYsHLcZstI57yR01Un3aWICYvDs2duo%2FeZBo5LFwrBKwlefaUw3Qsz4Wh%2FFWaihCBBA9fH9vuTIAw1ydg9ww%2FNGY0a63w7f0rC3zFqgY3Fe2R5ij9Vo%2BlfSX%2B6Gej95WzwiiUWjJbo3D6oNy90YEm8Cu2eKO%2BqiAfQL4JK1Bu3M5znCTnEuT30g7TIOvgQy1C%2Fe3wEhMlXbcQ1BecmNILZxT8PGI9gvS4M1wRS1RmCov1ClKVxqo5tDSC%2FHyCeisoY7anO5CUBXGvbEwDxB3HrRYPcxznisUBG9CezW1%2Bqu1xknmxISj2LFM8qtRQls2N1WrZ65jGJwZ4Q0rgoDet8VHT0BZotlgtG2PbXFiau%2FV1zun%2F8Q5nC%2Fq5PL7wEX9TbVljcy04cUWk3dyXd57WpfmGDS%2FMKGm0MkGOqUBLP%2BUceaBhXWtV1JDXx5PXKkfKPdXghUPe%2Fp5PPkYjZVpLmGiHkIRJhnTu3GeeZGWPBzM6HcEMIKPR6UTOBEu4Sml6yvZdNe4NxQ%2BaHliaLEo6MjI1ILzgHTJkiw9EUSvh%2F%2F%2BbXlcHQ%2BL3z8CMjM8A0LLSSHaMumKU80stsFJ5C6k0MYonSpIFVVP6LZDzZ7M6rF3PieliWy4WccSpmM16EQgJk9t&X-Amz-Signature=aea25b930df4a65fda7a1d559dba1b420b8ce9db871b7ae24600316416853133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

