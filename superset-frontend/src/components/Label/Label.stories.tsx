/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { action } from '@storybook/addon-actions';
import Label, { Type, DatasetTypeLabel, PublishedLabel } from './index';

export default {
  title: 'Label',
  component: Label,
  excludeStories: 'options',
};

export const options: Type[] = [
  'default',
  'alert',
  'info',
  'success',
  'warning',
  'danger',
  'primary',
  'secondary',
];

export const LabelGallery = props => {
  let onClick;
  if (props.hasOnClick) {
    onClick = action('clicked');
  }
  return (
    <>
      <h4>Non-interactive</h4>
      {Object.values(options).map((opt: Type) => (
        <Label key={opt} type={opt}>
          {`style: "${opt}"`}
        </Label>
      ))}
      <br />
      <h4>Interactive</h4>
      {Object.values(options).map((opt: Type) => (
        <Label key={opt} type={opt} {...props} onClick={onClick}>
          {`style: "${opt}"`}
        </Label>
      ))}
      <h4>Reusable Labels</h4>
      <h5>DatasetType</h5>
      <div>
        <DatasetTypeLabel datasetType="physical" />
        <DatasetTypeLabel datasetType="virtual" />
      </div>
      <h5>PublishedLabel</h5>
      <PublishedLabel isPublished />
      <PublishedLabel isPublished={false} />
    </>
  );
};

LabelGallery.args = {
  hasOnClick: true,
  monospace: false,
};
LabelGallery.argTypes = {
  monospace: {
    name: 'monospace',
    control: { type: 'boolean' },
  },
  hasOnClick: {
    name: 'hasOnClick',
    control: { type: 'boolean' },
  },
};
